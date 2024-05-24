import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { useRoute } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import supabase from '../config/database';
import { useSelector } from 'react-redux';

const EditDailyGoalsScreen = ({ navigation }) => {
  const [aimSteps, setAimSteps] = useState('');
  const [aimCals, setAimCals] = useState('');
  const [aimExercises, setAimExercises] = useState('');
  const [caloriesPerStep, setCaloriesPerStep] = useState('');
  const [totalFoodCalo, setTotalFoodCalo] = useState(0);
  const [totalExerciseCalo, setTotalExerciseCalo] = useState(0);
  const [userIdDB, setUserIdDB] = useState('');
  const [dateDB, setDateDB] = useState('');

  const route = useRoute();
  const { steps } = route.params;
  const CaloExercises = route.params.CaloExercise;

  const CaloExercise = aimSteps * 0.05;
  const percent_steps = (steps / (aimSteps || 1)) * 100;
  const percent_cals = (100 / (aimCals || 1)) * 100;
  const percent_exercises = (5 / (aimExercises || 1)) * 100;

  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();

  var date = `${year}-${month < 10 ? '0' + month : month}-${day}`;
  const handleStepsChange = (text) => {
    const parsedNumber = parseInt(text);
    setAimSteps(isNaN(parsedNumber) ? '' : parsedNumber);
    setCaloriesPerStep(
      isNaN(parsedNumber) || isNaN(aimCals) ? '' : parsedNumber * aimCals
    );
  };

  const handleCalsChange = (text) => {
    const parsedNumber = parseInt(text);
    setAimCals(isNaN(parsedNumber) ? '' : parsedNumber);
    setCaloriesPerStep(
      isNaN(parsedNumber) || isNaN(aimSteps) ? '' : aimSteps * parsedNumber
    );
  };

  const handleExercisesChange = (text) => {
    const parsedNumber = parseInt(text);
    setAimExercises(isNaN(parsedNumber) ? '' : parsedNumber);
  };

  const handleDonePress = () => {
    Keyboard.dismiss();
    onAddDailyGoal();
  };
  const userId = useSelector((state) => state.reducers);

  useEffect(() => {
    getTotalFoodCalo();
    getUserId();
    getTotalExerciseCalo();
  }, []);

  const getTotalFoodCalo = async () => {
    const { data, error } = await supabase
      .from('Food')
      .select('cal')
      .eq('idUser', userId[userId.length - 1].uid);

    if (error) {
      console.log(error);
    } else {
      const total = data.reduce((sum, item) => sum + item.cal, 0);
      setTotalFoodCalo(total);
    }
  };

  const getTotalExerciseCalo = async () => {
    const { data, error } = await supabase
      .from('ExProcess')
      .select('calory, created_at')
      .eq('IdUser', userId[userId.length - 1].uid);

    if (error) {
      console.log(error);
    } else {
      data.map((item) => {
        if (item.created_at.substring(0, 10) == date) {
          const totalExercise = data.reduce(
            (sum, item) => sum + item.calory,
            0
          );
          setTotalExerciseCalo(totalExercise);
        }
      });
    }
  };

  const getUserId = async () => {
    const { data, error } = await supabase
      .from('DailyGoal')
      .select('idUser')
      .eq('idUser', userId[userId.length - 1].uid);

    if (error) {
      console.log(error);
    } else {
      setUserIdDB(data[0].idUser);
    }
  };

  const onAddDailyGoal = async () => {
    if (userId === userIdDB) {
      const { error } = await supabase.from('DailyGoal').insert({
        StepPerDay: aimSteps,
        CalPerDay: CaloExercise,
        ExPerDay: aimExercises,
        TotalFoodCal: totalFoodCalo,
        TotalExerciseCal: totalExerciseCalo,
      });

      if (error) {
        console.log(error);
      } else {
        navigation.navigate('ExerciseDailyDiary', { aimSteps });
      }
    } else {
      const { error } = await supabase
        .from('DailyGoal')
        .update({
          StepPerDay: aimSteps,
          CalPerDay: CaloExercise,
          ExPerDay: aimExercises,
          TotalExerciseCal: totalExerciseCalo,
        })
        .eq('idUser', userId[userId.length - 1].uid);
      if (error) {
        console.log(error);
      } else {
        navigation.navigate('ExerciseDailyDiary', { aimSteps });
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back' size={36} color='#fff' />
            </TouchableOpacity>
            <Text style={styles.title}>Daily Goals Details</Text>
            <MaterialIcons
              name='done'
              size={36}
              color='#fff'
              onPress={handleDonePress}
            />
          </View>
        </View>
        <View style={styles.infor}>
          <View style={styles.section}>
            <Text style={styles.title1}>Edit Goals</Text>
            <Text>Steps, Cals</Text>
          </View>
          <View style={styles.divider}></View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Steps per day</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleStepsChange}
                keyboardType='numeric'
                value={aimSteps.toString()}
                placeholder='Enter steps'
                placeholderTextColor={COLORS.placeholder}
              />
            </View>
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Calories per day</Text>
            <View style={styles.inputContainer}>
              <Text>{CaloExercise}</Text>
            </View>
          </View>

          <View style={styles.divider}></View>

          <View style={styles.section}>
            <Text style={styles.title1}>Percent of Daily Goals</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressItem}>
                <Progress.Bar
                  progress={percent_steps * 0.01}
                  width={150}
                  color='#5BB6AF'
                  style={styles.progressBar}
                />
                <Text>{percent_steps.toFixed(0)}%</Text>
                <Text style={styles.progressLabel}>Steps</Text>
              </View>

              <View style={styles.progressItem}>
                <Progress.Bar
                  progress={CaloExercises / CaloExercise}
                  width={150}
                  color='#F2B455'
                  style={styles.progressBar}
                />
                <Text>
                  {((CaloExercises / CaloExercise) * 100).toFixed(0)}%
                </Text>
                <Text style={styles.progressLabel}>Cals</Text>
              </View>
            </View>
          </View>

          <View style={styles.reportContainer}>
            <Text style={styles.reportText}>
              Is this information incorrect?{' '}
              <Text style={styles.reportLink}>Report Food.</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditDailyGoalsScreen;

const styles = StyleSheet.create({
  infor: {
    top: -20,
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff',
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  header: {
    height: 130,
    width: '100%',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
  },
  section: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#D0D0D0',
    marginVertical: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  inputContainer: {
    width: '35%',
    height: 35,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  input: {
    color: COLORS.primary,
    width: '100%',
  },
  progressContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  progressItem: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  progressBar: {
    marginBottom: 20,
  },
  progressLabel: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  reportContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    padding: 20,
  },
  reportText: {
    color: '#7E7E7E',
  },
  reportLink: {
    color: '#2A64E4',
  },
});
