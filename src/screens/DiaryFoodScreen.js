import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeaderToday from '../components/HeaderToday';
import Box from '../components/Box';
import SwitchButton from '../components/SwitchButton';
import { COLORS } from '../constants';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Divider, Button } from '@rneui/themed';

const DiaryFoodScreen = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <HeaderToday />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={{ alignItems: 'center', margin: 10 }}
          onPress={() => navigation.navigate('ExerciseDailyDiary')}
        >
          <SwitchButton switchBtnContent={switchBtnContent} />
        </TouchableOpacity>

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
                  <AnimatedCircularProgress
                    size={150}
                    width={18}
                    fill={20}
                    arcSweepAngle={200}
                    lineCap={'round'}
                    rotation={260}
                    tintColor='orange'
                    onAnimationComplete={() =>
                      console.log('onAnimationComplete')
                    }
                    backgroundColor={COLORS.background}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>
                      1486
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: '#797979',
                      }}
                    >
                      remaining
                    </Text>
                  </View>
                </View>
                <View style={styles.resultContainer}>
                  <Text style={{ fontSize: 18, fontWeight: '400' }}>232</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '400',
                      color: '#797979',
                    }}
                  >
                    eaten
                  </Text>
                </View>
              </View>
            </View>
          }
        />
        <Box
          styleBox={{ marginTop: 10 }}
          content={
            <View style={styles.boxContentContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.title}>Breakfast</Text>
                <Text style={styles.title}>282</Text>
              </View>
              <Divider width={1} />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}
              >
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.nameFood}>Açai Bowl</Text>
                  <Text style={styles.numberFood}>1 bowl</Text>
                </View>
                <Text style={styles.caloFood}>180</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}
              >
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.nameFood}>Omelette</Text>
                  <Text style={styles.numberFood}>2 servings</Text>
                </View>
                <Text style={styles.caloFood}>102</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}
              >
                <Button
                  icon={
                    <Image
                      style={{ height: 10, width: 10 }}
                      source={require('../../assets/plus.png')}
                    />
                  }
                  buttonStyle={styles.addBtn}
                  onPress={() => {
                    console.log('hi');
                  }}
                />
                <Button title='Add' type='clear' />
              </View>
            </View>
          }
        />
        <Box
          styleBox={{ marginTop: 10 }}
          content={
            <View style={styles.boxContentContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.title}>Lunch</Text>
              </View>
              <Divider width={1} />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}
              >
                <Button
                  icon={
                    <Image
                      style={{ height: 10, width: 10 }}
                      source={require('../../assets/plus.png')}
                    />
                  }
                  buttonStyle={styles.addBtn}
                  onPress={() => {
                    console.log('hi');
                  }}
                />
                <Button title='Add' type='clear' />
              </View>
            </View>
          }
        />
        <Box
          styleBox={{ marginTop: 10 }}
          content={
            <View style={styles.boxContentContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.title}>Dinner</Text>
              </View>
              <Divider width={1} />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}
              >
                <Button
                  icon={
                    <Image
                      style={{ height: 10, width: 10 }}
                      source={require('../../assets/plus.png')}
                    />
                  }
                  buttonStyle={styles.addBtn}
                  onPress={() => {
                    console.log('hi');
                  }}
                />
                <Button title='Add' type='clear' />
              </View>
            </View>
          }
        />
        <Box
          styleBox={{ marginTop: 10 }}
          content={
            <View style={styles.boxContentContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.title}>Snacks</Text>
              </View>
              <Divider width={1} />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}
              >
                <Button
                  icon={
                    <Image
                      style={{ height: 10, width: 10 }}
                      source={require('../../assets/plus.png')}
                    />
                  }
                  buttonStyle={styles.addBtn}
                  onPress={() => {
                    console.log('hi');
                  }}
                />
                <Button title='Add' type='clear' />
              </View>
            </View>
          }
        />
      </ScrollView>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameFood: {
    fontSize: 18,
    fontWeight: '400',
  },
  numberFood: {
    color: '#727272',
    fontSize: 15,
    fontWeight: '400',
  },
  caloFood: {
    fontSize: 15,
    fontWeight: '400',
  },
  addBtn: {
    width: 18,
    height: 18,
    borderRadius: 100,
  },
  addContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
});
export default DiaryFoodScreen;
