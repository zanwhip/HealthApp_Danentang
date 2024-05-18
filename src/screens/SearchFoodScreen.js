import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

import FoodListItem from '../components/FoodListItem';
import { gql, useLazyQuery } from '@apollo/client';
import { Ionicons } from '@expo/vector-icons';
import { CameraOrientation } from 'expo-camera/build/legacy/Camera.types';
import { RNCamera } from 'react-native-camera';
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
  const [permission, requestPermission] = useCameraPermissions();
  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  useEffect(() => {
    const getPermission = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };
    getPermission();
  }, []);

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
  };

  const handleBarCodeScanned = ({ data }) => {
    runSearch({ variables: { upc: data } });
    setScannerEnabled(false);
  };

  if (error) {
    return <Text>Failed to search</Text>;
  }

  if (scannerEnabled) {
    if (!permission) {
      return <Text>Requesting camera permission...</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <CameraView
          // type={RNCamera.Constants.Type.back}
          // flashMode={RNCamera.Constants.FlashMode.on}
          // captureAudio={false}
          style={{ width: '100%', height: '100%' }}
          onBarCodeScanned={(data) => {
            console.log(data);
            runSearch({ variables: { upc: data.data } });
            setScannerEnabled(false);
          }}
        />
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
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
      >
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
});

export default SearchFoodScreen;
