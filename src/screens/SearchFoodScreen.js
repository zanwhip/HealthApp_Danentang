import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, ActivityIndicator, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Camera } from 'expo-camera';
import { gql, useLazyQuery } from '@apollo/client';
import { Ionicons } from '@expo/vector-icons';
import FoodListItem from '../components/FoodListItem';
import { BarCodeScanner } from 'expo-barcode-scanner';

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
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  useEffect(() => {
    requestPermission();
  }, []);

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
  };

  const handleBarCodeScanned = ({ data }) => {
    console.log(data);
    runSearch({ variables: { upc: data.data } });
    setScannerEnabled(false);
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  if (error) {
    return <Text>Failed to search</Text>;
  }

  if (scannerEnabled) {
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          style={{ width: '100%', height: '100%' }}
          facing={facing}
          onBarCodeScanned={(data) => {
            console.log(data);
            runSearch({ variables: { upc: data.data } });
            setScannerEnabled(false);
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </BarCodeScanner>
        <Ionicons
          onPress={() => setScannerEnabled(false)}
          name='close'
          size={30}
          color='dimgray'
          style={{ position: 'absolute', right: 10, top: 10 }}
        />
      </View>
    );
  }

  const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder='Search...'
          style={styles.input}
        />
        <Ionicons
          onPress={() => setScannerEnabled(true)}
          name='barcode-outline'
          size={32}
          color='dimgray'
        />
      </View>
      {search && <Button title='Search' onPress={performSearch} />}

      {loading && <ActivityIndicator />}
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodListItem item={item} />}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center' }}>
            <Text>Search a food</Text>
          </View>
        )}
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
    paddingVertical: 40,
    gap: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SearchFoodScreen;
