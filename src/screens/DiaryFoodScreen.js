    import {
      View,
      Text,
      StyleSheet,
      Image,
      FlatList,
      ActivityIndicator,
      TouchableOpacity,
    } from 'react-native';
    import React, { useEffect, useState, useCallback } from 'react';
    import HeaderToday from '../components/HeaderToday';
    import Box from '../components/Box';
    import { COLORS } from '../constants';
    import { AnimatedCircularProgress } from 'react-native-circular-progress';
    import { Divider, Button } from '@rneui/themed';
    import { useSelector } from 'react-redux';
    import { useFocusEffect } from '@react-navigation/native';
    import supabase from '../config/database';
    import FoodLogListItem from '../components/FoodLogListItem';

    const DiaryFoodScreen = ({ navigation }) => {
      const [foodData, setFoodData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [userData, setUserData] = useState(null);
      const [bmr, setBmr] = useState(null);

      const fetchFoodLogs = async () => {
        try {
          setLoading(true);
          const { data, error } = await supabase
            .from('Food')
            .select()
            .order('created_at', { ascending: false });
    
          if (error) {
            setError(error.message);
          } else {
            setFoodData(data);
            console.log('Fetched data:', data);
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };



      
      const calculateAge = (DateOfBirth) => {
        const dob = new Date(DateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
          age--;
        }
        return age;
      };
    
      const calculateBMR = (weight, height, age, gender) => {
        // Chuyển đổi cân nặng từ kilograms sang pounds (1 kilogram ≈ 2.20462 pounds)
        const weightInPounds = weight * 2.20462;
    
        // Chuyển đổi chiều cao từ centimeters sang inches (1 centimeter ≈ 0.393701 inches)
        const heightInInches = height * 0.393701;
        
        let bmr = 0;
        if (gender === 'male') {
          // Công thức tính BMR cho nam giới
        
          bmr = 10 * weightInPounds + 6.25 * heightInInches - 5 * age + 5;
        } else if (gender === 'female') {
          // Công thức tính BMR cho nữ giới
          bmr = 10 * weightInPounds + 6.25 * heightInInches - 5 * age - 161;
        }
        return bmr;
      };
    
    
      const fetchUserData = async () => {
        try {
          const { data, error } = await supabase
            .from('User')
            .select()
            .eq('IdUser', sessionID[sessionID.length - 1].uid);
    
          if (error) {
            setError(error.message);
          } else {
            const user = data[0];
            setUserData(user);
            console.log('Fetched user data:', user);
    
            // Tính toán BMR
             const bmr = calculateBMR(user.Weight, user.Height, calculateAge(user.DateOfBirth), user.Gender);
          
            console.log('cao',user.Height,)
            console.log('nặng',user.Weight,)
            console.log('cao', calculateAge(user.DateOfBirth))
            console.log('cao', user.Gender,)
            console.log('BMR:', bmr.toFixed(0));
            setBmr(bmr.toFixed(0))
          }
        } catch (error) {
          setError(error.message);
          console.log('Error fetching user data:', error);
        }
      };
    
      useFocusEffect(
        useCallback(() => {
          fetchFoodLogs();
          fetchUserData();
        }, [])
      );
    
      const totalCalories = foodData.reduce((total, item) => total + item.cal, 0);
    
      const sessionID = useSelector((state) => state.reducers);
      const remainingCalories = bmr - totalCalories;
      const chartpercent = (totalCalories/bmr)*100
      
      const renderHeader = () => (
        <View>
          <HeaderToday navigation={navigation} />
          <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100%' }}>
            <View style={styles.type}>
              <TouchableOpacity
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  height: 30,
                  alignItems: 'center',
                  backgroundColor: COLORS.primary,
                  borderRadius: 15,
                }}
              >
                <Text style={{ color: '#fff' }}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginHorizontal: 10,
                  width: '40%',
                  justifyContent: 'center',
                  height: 30,
                  alignItems: 'center',
                }}
                onPress={() =>
                  navigation.navigate(
                    'ExerciseDailyDiary',
                    sessionID[sessionID.length - 1].uid
                  )
                }
              >
                <Text style={{ color: COLORS.primary }}>Exercise</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Box
          
            disabled={true}
            content={
              <View style={styles.boxContentContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.title}>Calories</Text>
                  <Image source={require('../../assets/pencil.png')} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={styles.resultContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>0</Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#797979' }}>
                      burned
                    </Text>
                  </View>
                  <View style={styles.resultContainer}>
                    <AnimatedCircularProgress
                      size={150}
                      width={18}
                      fill={chartpercent}
                      arcSweepAngle={360}
                      lineCap={'round'}
                      rotation={260}
                      tintColor='orange'
                      onAnimationComplete={() =>
                        console.log('onAnimationComplete')
                      }
                      backgroundColor={COLORS.background}
                    />
                    <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 18, fontWeight: '400' }}>
                      {bmr}
                      </Text>
                      <Text style={{ fontSize: 15, fontWeight: '400', color: '#797979' }}>
                      necessary
                      </Text>
                    </View>
                  </View>
                  <View style={styles.resultContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>{totalCalories}</Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#797979' }}>
                      eaten
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection : 'row',  }}>
                <Text style={{ fontSize : 20, fontWeight : 'bold',  }}>Calorie deficit : </Text>
                <Text style={{ fontSize : 20, fontWeight : 'bold',  }}>{remainingCalories}</Text>
                </View>
              </View>
            }
          />

          <Box
            disabled={true}
            styleBox={{ marginTop: 10,  }}
            content={
              <View style={styles.boxContentContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.title}>Total Calories</Text>
                  <Text style={styles.calorieText}>{totalCalories}</Text>
                </View>
                <Divider width={1} />
              </View>
            }
          />
        </View>
      );

      const renderFooter = () => (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, backgroundColor : '#fff' , height: 40, width: 120, marginLeft : '70%', borderRadius : 20, justifyContent :"center"}}
        onPress={() => navigation.navigate('SearchFood')}
        >
          <Button
            icon={<Image style={{ height: 10, width: 10,  }} source={require('../../assets/plus.png')} />}
            buttonStyle={styles.addBtn}
            
          />
          <Button title='Add' type='clear' />
        </TouchableOpacity>
      );

      return (
        <View style={{  }}>
          <FlatList
            data={foodData}
            keyExtractor={(item) => item.id ? item.id.toString() : item.created_at.toString()} // Use a fallback key
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            renderItem={({ item }) => (
              <FoodLogListItem item={item} onDelete={() => {}} />
            )}
            ListEmptyComponent={() => (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {loading ? (
                  <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                  <Text style={{ color: 'red' }}>{error}</Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            )}
          />
          
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: COLORS.background,
      },
      title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
      },
      boxContentContainer: {
        flex: 1,
      
      },
      boxContentContainer1: {
        flex: 1,
        height : 700,
      },
      resultContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      addBtn: {
        width: 18,
        height: 18,
        borderRadius: 100,
      },
      type: {
        width: 200,
        height: 30,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection: 'row',
      },
    });

    export default DiaryFoodScreen;
