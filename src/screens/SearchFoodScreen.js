// screens/SearchScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { gql, useLazyQuery } from '@apollo/client';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

const query = gql`
  query search($ingr: String, $upc: String) {
    search(ingr: $ingr, upc: $upc) {
      text
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`;

const SearchFoodScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [scannerEnabled, setScannerEnabled] = useState(false);

  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  // Request only if permission is not granted, and we can ask again
  requestPermission();

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
    // setSearch('');
  };

  if (error) {
    return <Text>Failed to search</Text>;
  }

  if (scannerEnabled) {
    return (
      <View>
        <Camera
          style={{ width: '100%', height: '100%' }}
          onBarCodeScanned={(data) => {
            console.log(data);
            runSearch({ variables: { upc: data.data } });
            setScannerEnabled(false);
          }}
        />
        <Ionicons
          onPress={() => setScannerEnabled(false)}
          name="close"
          size={30}
          color="dimgray"
          style={{ position: 'absolute', right: 10, top: 10 }}
        />
      </View>
    );
  }

  const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search..."
          style={styles.input}
        />
        <Ionicons
          onPress={() => setScannerEnabled(true)}
          name="barcode-outline"
          size={32}
          color="dimgray"
        />
      </View>
      {search && <Button title="Search" onPress={performSearch} />}

      {loading && <ActivityIndicator />}
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodListItem item={item} />}
        ListEmptyComponent={() => <Text>Search a food</Text>}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingVertical : 40,
    gap: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
});

export default SearchFoodScreen;
