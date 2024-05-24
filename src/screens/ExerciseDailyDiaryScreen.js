// ExerciseDailyDiaryScreen.js
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

const ExerciseDailyDiaryScreen = ({ navigation }) => {
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [steps, setSteps] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalGoalCalories, setTotalGoalCalories] = useState(100);
  const CaloExercise = steps * 0.05 + 0.1;

  const route = useRoute();
  const IdUser = route.params;
  console.log('>>>> User Id : ', IdUser);

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


  async function saveExerciseCaloData() {
    let { data: existingData, error: fetchError } = await supabase
        .from('ExerciseCalo')
        .select('*')
        .eq('idUser', IdUser);

    if (fetchError) {
        console.error('Error fetching existing data:', fetchError);
        return;
    }

    if (existingData.length > 0) {
        // If data already exists, update it
        const { id } = existingData[0];
        const { error: updateError } = await supabase
            .from('ExerciseCalo')
            .update({ totalGoalCalories, totalCalories })
            .eq('id', id);

        if (updateError) {
            console.error('Error updating data:', updateError);
        } else {
            console.log('Data updated successfully');
        }
    } else {
        // If no data exists, insert new data
        const { error: insertError } = await supabase
            .from('ExerciseCalo')
            .insert([
                {
                    idUser: IdUser,
                    totalGoalCalories: totalGoalCalories,
                    totalCalories: totalCalories
                }
            ]);

        if (insertError) {
            console.error('Error saving data:', insertError);
        } else {
            console.log('Data saved successfully');
        }
    }
}


 

  
  async function fetchExerciseCaloData() {
    let { data: ExerciseCalo, error } = await supabase
      .from('ExerciseCalo')
      .select(`*`)
      .eq('idUser', IdUser);
      
    if (error) {
      console.error('Error fetching ExerciseCalo data:', error);
    } else {
      console.log('ExerciseCalo data:', ExerciseCalo);
 
      if (ExerciseCalo.length > 0) {
        const { totalCalories, totalGoalCalories } = ExerciseCalo[0];
        setTotalCalories(totalCalories);
        setTotalGoalCalories(totalGoalCalories);
      }
    }
  }
  
  
  useEffect(() => {
    fetchExerciseProcessData();
    saveExerciseCaloData();
    fetchExerciseCaloData();
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
  useEffect(() => {
    let totalCaloriesBurned = 0;
    filteredExercises.forEach((item) => {
      const caloriesBurned = item.Exercise.CaloriesExercise;
      totalCaloriesBurned += caloriesBurned;
    });
    setTotalCalories(totalCaloriesBurned);
  }, [filteredExercises]);

  useEffect(() => {
    let totalCaloriesBurned = 0;
    filteredExercises.forEach((item) => {
      const caloriesBurned = item.Exercise.CaloriesExercise;
    
      totalCaloriesBurned += caloriesBurned;
    
    });
    setTotalGoalCalories(totalCaloriesBurned)
    setTotalCalories(totalCaloriesBurned-totalCaloriesBurned);
   
  }, [filteredExercises]);

  const handleExerciseComplete = (calories) => {
    setTotalCalories((prevTotal) => prevTotal + calories);
  };


  const percent = ({totalCalories})/({totalGoalCalories}+1)*100;

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
            <Feather name="credit-card" size={30} color="#fff" />
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
            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', alignItems :'space-between', width : '100%', height : 40}}>
              <Text style={styles.title1}>Daily Goals</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditDailyGoals', { steps })}>
                <FontAwesome
                  name="pencil"
                  size={26}
                  color={COLORS.primary}
                  style={{ }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', marginTop: 30,  }}>
                <ProgressChart
                  data={{
                    labels: ['', '', 'c'],
                    data: [, , totalCalories / (totalGoalCalories + 0.0000000000000001)],
                  }}
                  width={180}
                  height={200}
                  strokeWidth={26}
                  radius={32}
                  chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 2,
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false,
                    fillShadowGradient: 'rgba(0, 255, 0, 0.5)',
                    fillShadowGradientOpacity: 1,
                  }}
                  hideLegend={true}
                />
                <View style={{ bottom: 120, alignItems: 'center',  }}>
                  <Text style={{ fontSize: 16 }}>Total </Text>
                  <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                 {totalCalories}
                  </Text>
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
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontWeight :'bold', color :'#fff', fontSize : 20 }}>Workouts</Text>
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
                  <TimeCount
                    duration={item.Time}
                    steps={steps}
                    calories={item.Exercise.CaloriesExercise}
                    IdExProcess={item.idExProcess}
                    onComplete={handleExerciseComplete} // Pass the callback here
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
