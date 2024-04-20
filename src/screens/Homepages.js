import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Box from '../components/Box';
import PieChart from 'react-native-pie-chart';
import { Button, ListItem } from '@rneui/themed';
import { COLORS } from '../constants';

const Homepages = () => {
  const widthAndHeight = 130;
  const series = [30, 50];
  const sliceColor = ['#EEEEEE', '#F2B455'];

  var [numberWater, setNumberWater] = useState(30);
  return (
    <SafeAreaView style={[styles.flex1]}>
      <ScrollView
        style={[styles.flex1, styles.container]}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.flex1}>
          <Box
            title={'Calories'}
            content={
              <View style={styles.boxContentContainer}>
                <View style={styles.pieChartContainer}>
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.7}
                    coverFill={'#FFF'}
                  />
                  <View style={styles.measureContainer}>
                    <Text style={styles.numberMeasure}>1124</Text>
                    <Text style={styles.textMeasure}>left</Text>
                  </View>
                </View>
                <View style={styles.parameterContainer}>
                  <View style={styles.resultContainer}>
                    <Image source={require('../../assets/flag.png')} />
                    <View style={styles.resultInforContainer}>
                      <Text style={styles.textResult}>Goal</Text>
                      <Text style={styles.numberResult}>1,923</Text>
                    </View>
                  </View>
                  <View style={styles.resultContainer}>
                    <Image source={require('../../assets/forkknife.png')} />
                    <View style={styles.resultInforContainer}>
                      <Text style={styles.textResult}>Food</Text>
                      <Text style={styles.numberResult}>941</Text>
                    </View>
                  </View>
                  <View style={styles.resultContainer}>
                    <Image
                      style={{ height: 25, width: 23 }}
                      source={require('../../assets/fire.png')}
                    />
                    <View style={styles.resultInforContainer}>
                      <Text style={styles.textResult}>Exercise</Text>
                      <Text style={styles.numberResult}>142</Text>
                    </View>
                  </View>
                </View>
              </View>
            }
          />
        </View>
        <View style={styles.waterAndChatbotContainer}>
          <Box
            title={'Water'}
            content={
              <View style={styles.boxContentContainer}>
                <View style={styles.waterContainer}>
                  <View style={styles.measureWaterContainer}>
                    <Image
                      style={{ height: 82, width: 32 }}
                      source={require('../../assets/waterbottle.png')}
                    />
                    <View style={styles.infoWaterContainer}>
                      <Text style={styles.numberWater}>{numberWater}</Text>
                      <Text style={styles.unitWater}>fl oz</Text>
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      icon={
                        <Image
                          style={{ margin: 6 }}
                          source={require('../../assets/minus.png')}
                        />
                      }
                      buttonStyle={styles.controlWaterBtn}
                      onPress={() => {
                        setNumberWater(--numberWater);
                      }}
                    />
                    <Button
                      icon={<Image source={require('../../assets/plus.png')} />}
                      buttonStyle={styles.controlWaterBtn}
                      onPress={() => {
                        setNumberWater(++numberWater);
                      }}
                    />
                  </View>
                </View>
              </View>
            }
          />
          <Box
            styleBox={{ marginLeft: 15 }}
            title={'Chatbot'}
            content={
              <View style={styles.boxContentContainer}>
                <View style={styles.chatbotContainer}>
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require('../../assets/chatbot.png')}
                  />
                </View>
              </View>
            }
          />
        </View>
        <View style={[styles.flex1, { marginTop: 29, marginBottom: 100 }]}>
          <Box
            title={'Exercise'}
            content={
              <View style={styles.exerciseContainer}>
                <View style={styles.exerciseContentContainer}>
                  <View style={styles.exerciseInforContainer}>
                    <ListItem
                      bottomDivider
                      containerStyle={{
                        margin: 0,
                        paddingLeft: 0,
                      }}
                    >
                      <ListItem.Content
                        style={styles.exerciseContentListContainer}
                      >
                        <ListItem.Title>Run</ListItem.Title>
                        <ListItem.Subtitle>30 min</ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                    <ListItem
                      bottomDivider
                      containerStyle={{ margin: 0, paddingLeft: 0 }}
                    >
                      <ListItem.Content
                        style={styles.exerciseContentListContainer}
                      >
                        <ListItem.Title>Walk</ListItem.Title>
                        <ListItem.Subtitle>10 min</ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  </View>
                  <View style={styles.exerciseMeasureContainer}>
                    <View style={styles.pieChartContainer}>
                      <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.7}
                        coverFill={'#FFF'}
                      />
                      <View style={styles.measureContainer}>
                        <Image
                          style={{ height: 46, width: 42 }}
                          source={require('../../assets/fire.png')}
                        />
                        <Text style={styles.textMeasure}>250 cals</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.addContainer}>
                  <Button
                    icon={
                      <Image
                        style={{ height: 10, width: 10 }}
                        source={require('../../assets/plus.png')}
                      />
                    }
                    buttonStyle={styles.addExerciseBtn}
                    onPress={() => {
                      console.log('hi');
                    }}
                  />
                  <Button title='Add' type='clear' />
                </View>
              </View>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingTop: 57,
    paddingHorizontal: 20,
  },
  flex1: {
    flex: 1,
  },
  boxContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  pieChartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  measureContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberMeasure: {
    fontSize: 30,
    fontWeight: '700',
  },
  textMeasure: {
    fontSize: 14,
    fontWeight: '400',
  },
  parameterContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    marginBottom: 5,
    flexDirection: 'row',
    marginLeft: 25,
    alignItems: 'center',
  },
  resultInforContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  textResult: {
    color: '#878787',
    fontSize: 14,
    fontWeight: '400',
  },
  numberResult: {
    fontSize: 20,
    fontWeight: '700',
  },
  waterAndChatbotContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
  waterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    flexDirection: 'column',
  },
  measureWaterContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  infoWaterContainer: {
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberWater: {
    fontSize: 32,
    fontWeight: '700',
  },
  unitWater: {
    fontSize: 16,
    fontWeight: '400',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  controlWaterBtn: {
    flex: 1,
    backgroundColor: COLORS.blue,
    borderRadius: 15,
    padding: 14,
    width: 50,
  },
  chatbotContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseContentListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exerciseContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  exerciseContentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  exerciseInforContainer: {
    flex: 1,
  },
  exerciseMeasureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  addExerciseBtn: {
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
