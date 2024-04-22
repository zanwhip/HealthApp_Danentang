import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import HeaderToday from '../components/HeaderToday';
import Box from '../components/Box';
import SwitchButton from '../components/SwitchButton';
import { DonutChart } from 'react-native-circular-chart';
import { COLORS } from '../constants';
import HalfPie from '../components/HalfPie';

const DiaryFoodScreen = () => {
  const switchBtnContent = [
    {
      id: 1,
      text: 'Food',
      onChecked: true,
    },
    {
      id: 2,
      text: 'Exercise',
      onChecked: false,
    },
  ];

  const DATA = [
    { name: 'Remaining', value: 1486, color: 'orange' },
    { name: 'none', value: 2000, color: COLORS.background },
  ];

  const widthAndHeight = 130;
  const series = [30, 70, 0];
  const sliceColor = ['#F2B455', '#EEEEEE', '#F2B455'];

  return (
    <View style={styles.container}>
      <HeaderToday />
      <View style={styles.containerContent}>
        <SwitchButton switchBtnContent={switchBtnContent} />
        {/* <HalfPie /> */}
        <Box
          content={
            <View style={styles.boxContentContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.title}>Calories</Text>
                <Image source={require('../../assets/pencil.png')} />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={styles.resultContainer}>
                  <Text style={{ fontSize: 18, fontWeight: '400' }}>0</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '400',
                      color: '#797979',
                    }}
                  >
                    burned
                  </Text>
                </View>
                <View style={styles.resultContainer}>
                  <HalfPie />
                </View>
                <View style={styles.resultContainer}>
                  <Text style={{ fontSize: 18, fontWeight: '400' }}>0</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '400',
                      color: '#797979',
                    }}
                  >
                    burned
                  </Text>
                </View>
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerContent: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  boxContentContainer: {
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DiaryFoodScreen;
