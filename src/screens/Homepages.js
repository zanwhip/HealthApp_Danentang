import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Box from '../components/Box';
import PieChart from 'react-native-pie-chart';
import { Button, ListItem } from '@rneui/themed';
import { COLORS } from '../constants';
import { Pedometer } from 'expo-sensors';
import { ProgressChart } from 'react-native-chart-kit';
import supabase from '../config/database';
import { useSelector } from 'react-redux';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const Homepages = ({ navigation }) => {
  // Khai báo state để lưu trữ số liệu water và số lần nhấn nút plus
  const [numberWater, setNumberWater] = useState(0);

  const sessionId = useSelector((state) => state.reducers);
  const IdUser = sessionId[sessionId.length - 1].uid;

  const fetchWaterData = () => {
    supabase
      .from('Water')
      .select('numberWater')
      .eq('idUser', IdUser)
      .then((response) => {
        if (response.data.length > 0) {
          setNumberWater(response.data[0].numberWater);
        } else {
          setNumberWater(0);
        }
      })
      .catch((error) => {
        console.error('Error fetching water data:', error);
      });
  };

  useEffect(() => {
    fetchWaterData();
  }, []);

  const handlePlusButtonPress = () => {
    supabase
      .from('Water')
      .delete()
      .eq('idUser', IdUser)
      .then((deleteResponse) => {
        console.log('Rows deleted successfully:', deleteResponse);
        supabase
          .from('Water')
          .insert([
            {
              idUser: IdUser,
              numberWater: numberWater,
            },
          ])
          .then((insertResponse) => {
            console.log('New row added successfully:', insertResponse);
            // Cập nhật giá trị numberWater
            setNumberWater((numberWater) => {
              const newNumberWater = numberWater + 100;
              if (newNumberWater < 2000) {
              }
              return newNumberWater;
            });
          })
          .catch((insertError) => {
            console.error('Error adding new row:', insertError);
          });
      })
      .catch((deleteError) => {
        console.error('Error deleting rows:', deleteError);
      });
  };

  // const sendNotification = async () => {
  //   await scheduleNotificationAsync({
  //     content: {
  //       title: 'Water Reminder',
  //       body: 'Please drink some water. Your water intake is less than 2000ml.',
  //       sound: 'default',
  //     },
  //     trigger: null, // Send immediately
  //   });
  // };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(252, 180, 85, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    fillShadowGradient: 'rgba(0, 255, 0, 0.5)',
    fillShadowGradientOpacity: 1,
  };
  // Set tham số của đếm bước chân
  const [steps, setSteps] = useState(0);
  const CaloExercise = steps * 0.05 + 0.1;

  useEffect(() => {
    Pedometer.isAvailableAsync().then(
      (result) => {
        if (result) {
          const subscription = Pedometer.watchStepCount((result) => {
            setSteps(result.steps);
          });

          return () => {
            subscription && subscription.remove();
          };
        }
      },
      (error) => {
        console.error('Could not get Pedometer availability:', error);
      }
    );
  }, []);

  const aimSteps = 20;
  const percent_steps = steps / aimSteps;

  const StepsData = {
    labels: ['Steps'],
    data: [, , percent_steps],
  };
  // Set tham số đêm calo
  const goal = 2000;
  const food = 1000;
  const exercise = 200;
  const left = goal - food + exercise;

  const Calories = {
    labels: ['Calo'],
    data: [, , left / goal],
  };

  return (
    <View style={[styles.flex1]}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: COLORS.primary,
          paddingTop: 20,
          height: 100,
          width: '100%',
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('ProfileFood')}>
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar.png')}
          />
        </TouchableOpacity>

        <Text style={{ color: COLORS.white, fontSize: 30, fontWeight: '700' }}>
          Good Morning!
        </Text>
        <Image source={require('../../assets/clarity_notification-line.png')} />
      </View>
      <ScrollView
        style={[styles.flex1, styles.container]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.flex1}>
          <Box
            title={'Calories'}
            content={
              <View style={styles.boxContentContainer}>
                <View style={styles.pieChartContainer}>
                  <ProgressChart
                    data={Calories}
                    width={140}
                    height={140}
                    strokeWidth={26}
                    radius={32}
                    chartConfig={chartConfig}
                    hideLegend={true}
                  />
                  <View style={styles.measureContainer}>
                    <Text style={styles.numberMeasure}>{left}</Text>
                    <Text style={styles.textMeasure}>left</Text>
                  </View>
                </View>
                <View style={styles.parameterContainer}>
                  <View style={styles.resultContainer}>
                    <Image source={require('../../assets/flag.png')} />
                    <View style={styles.resultInforContainer}>
                      <Text style={styles.textResult}>Goal</Text>
                      <Text style={styles.numberResult}>{goal}</Text>
                    </View>
                  </View>
                  <View style={styles.resultContainer}>
                    <Image source={require('../../assets/forkknife.png')} />
                    <View style={styles.resultInforContainer}>
                      <Text style={styles.textResult}>Food</Text>
                      <Text style={styles.numberResult}>{food}</Text>
                    </View>
                  </View>
                  <View style={styles.resultContainer}>
                    <Image
                      style={{ height: 25, width: 23 }}
                      source={require('../../assets/fire.png')}
                    />
                    <View style={styles.resultInforContainer}>
                      <Text style={styles.textResult}>Exercise</Text>
                      <Text style={styles.numberResult}>{exercise}</Text>
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

                      <Text style={styles.unitWater}>milliliter</Text>
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
                        setNumberWater((numberWater) => numberWater - 100);
                      }}
                    />
                    <Button
                      icon={<Image source={require('../../assets/plus.png')} />}
                      buttonStyle={styles.controlWaterBtn}
                      onPress={handlePlusButtonPress} // Gọi hàm xử lý sự kiện khi nút được nhấn
                    />
                  </View>
                </View>
              </View>
            }
          />
          <Box
            styleBox={{ marginLeft: 15 }}
            title={'Chatbot'}
            disabled={false}
            onPress={() => {
              navigation.navigate('chat');
            }}
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
            title={'Move during the day'}
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
                        <ListItem.Title>Steps</ListItem.Title>
                        <ListItem.Subtitle>{steps}</ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                    <ListItem
                      bottomDivider
                      containerStyle={{ margin: 0, paddingLeft: 0 }}
                    >
                      <ListItem.Content
                        style={styles.exerciseContentListContainer}
                      >
                        <ListItem.Title>Kcal</ListItem.Title>
                        <ListItem.Subtitle>{CaloExercise}</ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  </View>
                  <View style={styles.exerciseMeasureContainer}>
                    <View style={styles.pieChartContainer}>
                      <ProgressChart
                        data={StepsData}
                        width={140}
                        height={140}
                        strokeWidth={26}
                        radius={32}
                        chartConfig={chartConfig}
                        hideLegend={true}
                      />
                      <View style={styles.measureContainer}>
                        <Image
                          style={{ height: 46, width: 42 }}
                          source={require('../../assets/fire.png')}
                        />
                        <Text style={styles.textMeasure}>{steps}</Text>
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
    </View>
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
