import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { ProgressChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';
import { Pedometer } from 'expo-sensors';
import { useRoute } from '@react-navigation/native';
import supabase from '../config/database';
import TimeCount from '../components/TimeCount';
import { useSelector } from 'react-redux';

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Đỏ
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  fillShadowGradient: 'rgba(0, 255, 0, 0.5)',
  fillShadowGradientOpacity: 1,
};

const ExerciseDailyDiaryScreen = ({ navigation }) => {
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [steps, setSteps] = useState(0);
  const [DataDaily, setDataDaily] = useState([]);

  const CaloExercise = steps * 0.05 + 0.1;

  const route = useRoute();
  const userId = useSelector((state) => state.reducers);
  const IdUser = userId[userId.length - 1].uid;

  const dailyGoalStep = DataDaily.length > 0 ? DataDaily[0].StepPerDay : 0;
  const dailyGoalCalories = DataDaily.length > 0 ? DataDaily[0].CalPerDay : 0;

  const stepProgress = dailyGoalStep > 0 ? steps / dailyGoalStep : 0;
  const calorieProgress =
    dailyGoalCalories > 0 ? CaloExercise / dailyGoalCalories : 0;

  // Ensure progress values are between 0 and 1
  const validStepProgress = Math.min(Math.max(stepProgress, 0), 1);
  const validCalorieProgress = Math.min(Math.max(calorieProgress, 0), 1);

  const chartData = {
    labels: ['', '', 'c'],
    data: [, , validCalorieProgress],
  };

  async function fetchExerciseProcessData() {
    let { data: ExerciseProcess, error } = await supabase
      .from('ExProcess')
      .select(`*, Exercise(id, typeExercise, CaloriesExercise)`)
      .eq('IdUser', IdUser);

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      console.log('Exercise data:', ExerciseProcess);
      setFilteredExercises(ExerciseProcess);
    }
  }

  async function fetchDailyGoalData() {
    let { data, error } = await supabase
      .from('DailyGoal')
      .select('*')
      .eq('idUser', IdUser);

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      console.log('check data Daily Goal : ', data);
      setDataDaily(data);
    }
  }

  useEffect(() => {
    fetchExerciseProcessData();
    fetchDailyGoalData();
  }, []);

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

  // Tính toán lượng calo và console log
  useEffect(() => {
    filteredExercises.forEach((item) => {
      const elapsedTime = item.Time; // Thời gian của bài tập
      const caloriesBurned = item.Exercise.CaloriesExercise * elapsedTime;
      console.log(
        `Calories burned for ${item.Exercise.typeExercise}:`,
        caloriesBurned
      );
    });
  }, [filteredExercises]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            width: '100%',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('CalendarScreen')}
          >
            <Feather name='credit-card' size={30} color='#fff' />
          </TouchableOpacity>

          <Text style={styles.title}>Today</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ width: '100%', height: 40, alignItems: 'center' }}>
          <View style={styles.type}>
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                width: '40%',
                justifyContent: 'center',
                height: 30,
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('DiaryFoodScreen')}
            >
              <Text style={{ color: COLORS.primary }}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                width: '50%',
                justifyContent: 'center',
                height: 30,
                alignItems: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: 15,
              }}
            >
              <Text style={{ color: '#fff' }}>Exercise</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.statistic}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.title1}>Daily Goals</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EditDailyGoals', { steps, CaloExercise })
                }
              >
                <FontAwesome
                  name='pencil'
                  size={26}
                  color={COLORS.primary}
                  style={{ left: 90 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', marginTop: 40 }}>
                <ProgressChart
                  data={chartData}
                  width={180}
                  height={200}
                  strokeWidth={26}
                  radius={32}
                  chartConfig={chartConfig}
                  hideLegend={true}
                />
                <View style={{ bottom: 120, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16 }}>Total : </Text>
                  <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                    {(validCalorieProgress * 100).toFixed(0)} %
                  </Text>
                </View>
              </View>
              <View style={{ right: -10 }}>
                <Text style={{ marginLeft: 80, fontWeight: 'bold' }}>
                  Daily Goals
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 20,
                      fontWeight: '400',
                      marginLeft: -100,
                    }}
                  >
                    Steps
                  </Text>
                  <Text
                    style={{ color: '#737373', fontSize: 12, marginLeft: 30 }}
                  >
                    {steps}/ {dailyGoalStep}
                  </Text>
                  <View
                    style={{ flexDirection: 'row', height: 30, width: '100%' }}
                  >
                    <Image
                      source={require('../assets/icon/step.png')}
                      style={{ height: 30, width: 30, marginRight: 6 }}
                    />
                    <Progress.Bar
                      progress={validStepProgress}
                      width={120}
                      height={18}
                      borderRadius={7}
                      color='#5BB6AF'
                      style={{ margin: 6 }}
                    />
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 20,
                      fontWeight: '400',
                      marginLeft: -100,
                    }}
                  >
                    Calories
                  </Text>
                  <Text
                    style={{ color: '#737373', fontSize: 12, marginLeft: 30 }}
                  >
                    {CaloExercise.toFixed(2)} / {dailyGoalCalories}
                  </Text>
                  <View
                    style={{ flexDirection: 'row', height: 30, width: '100%' }}
                  >
                    <Image
                      source={require('../assets/icon/calo.png')}
                      style={{ height: 30, width: 30, marginRight: 6 }}
                    />
                    <Progress.Bar
                      progress={validCalorieProgress}
                      width={120}
                      height={18}
                      borderRadius={7}
                      color='#F2B455'
                      style={{ margin: 6 }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.statistic}>
            <View
              style={{
                height: 50,
                width: '100%',
                marginHorizontal: 20,
                backgroundColor: '#F6F5F5',
                borderRadius: 10,
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                  borderRadius: 10,
                }}
              >
                <Text>Workouts</Text>
              </View>
              <View
                style={{
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text>Weight</Text>
              </View>
            </View>

            {filteredExercises.map((item) => (
              <View
                key={item.idExProcess}
                style={{
                  height: 70,
                  width: '100%',
                  marginHorizontal: 20,
                  backgroundColor: '#F6F5F5',
                  borderRadius: 10,
                  flexDirection: 'row',
                  marginTop: 12,
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../assets/icon/run.png')}
                  style={{ height: 50, width: 50, marginRight: 6 }}
                />
                <View style={{ left: -40 }}>
                  <Text
                    style={{ fontSize: 18 }}
                    onPress={() => {
                      setSteps(item.step);
                      fetchExerciseProcessData();
                    }}
                  >
                    {item.Exercise.typeExercise}
                  </Text>
                  <Text style={{ color: '#737373' }}>{item.Time}s</Text>
                </View>
                <View>
                  {/* <TouchableOpacity onPress={() => {setSteps(item.step);}}></TouchableOpacity> */}
                  <TimeCount
                    duration={item.Time}
                    steps={steps}
                    calories={CaloExercise}
                    IdExProcess={item.idExProcess}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExerciseDailyDiaryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: '32%',
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  header: {
    height: 90,
    width: '100%',
    backgroundColor: COLORS.primary,
    //justifyContent :"center",
    paddingTop: 20,
  },
  type: {
    width: 200,
    height: 30,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
  },
  statistic: {
    width: '90%',
    height: 310,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
});
