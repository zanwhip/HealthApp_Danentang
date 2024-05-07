import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepages from '../screens/Homepages';
import ExploreScreen from '../screens/ExploreScreen';
import BottomTabNavigation from './BottomTabNavigation';
import AddExerciseScreen from '../screens/AddExerciseScreen';
import EditDailyGoalsScreen from '../screens/EditDailyGoalsScreen';
import ExerciseDailyDiaryScreen from '../screens/ExerciseDailyDiaryScreen';
import ExerciseDetailsScreen from '../screens/ExerciseDetailsScreen';
import ProfileFoodScreen from '../screens/ProfileFoodScreen';
import ChatBotScreen from '../screens/ChatbotScreen';
// PHƯƠNG HÀ
import AddFood_AcaiScreen from '../screens/AddFood_AcaiScreen';
import AddFood_GoldfishScreen from '../screens/AddFood_GoldfishScreen';
import AddFood_TofuScreen from '../screens/AddFood_TofuScreen';
import SearchBreakfast from '../screens/SearchBreakfast';
import SearchExercise from '../screens/SearchExercise';
//Lê văn hải
import CalendarScreen from '../screens/CalendarScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginScreen1 from '../screens/LoginScreen1';
import LoginScreen2 from '../screens/LoginScreen2';
import SignUpScreen from '../screens/SignUpScreen';
import SearchFoodScreen from '../screens/SearchFoodScreen';
import APIcodeFood from '../screens/APIcodeFoodScreen';
import PlanScreen from '../screens/PlanScreen';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';




import DiaryFoodScreen from '../screens/DiaryFoodScreen';
const Stack = createNativeStackNavigator();


const client = new ApolloClient({
  uri: 'https://oneonta.stepzen.net/api/belligerent-waterbuffalo/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'apikey oneonta::stepzen.io+1000::f1fd564cbba026853eeedfbb05322edfe26263d2973848915d962dd16878e937',
  },
});


function AppNavigation() {
    return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerShown: false // Bỏ hiển thị header
        }}> 
         <Stack.Screen name="APIcodeFood" component={APIcodeFood} />
        <Stack.Screen name="SearchFood" component={SearchFoodScreen} />
           
           
         


            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LoginScreen1" component={LoginScreen1} />
          <Stack.Screen name="LoginScreen2" component={LoginScreen2} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

       
           <Stack.Screen
                    name="BottomTabNavigation"
                    component={BottomTabNavigation}
                    options={{
                        headerShown: false,
                    }}
                />
           
          <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        
          <Stack.Screen name="Explore" component={ExploreScreen} />
          <Stack.Screen name="Plan" component={PlanScreen} />
          <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
          <Stack.Screen name="EditDailyGoals" component={EditDailyGoalsScreen} />
          <Stack.Screen name="ExerciseDailyDiary" component={ExerciseDailyDiaryScreen} />
          <Stack.Screen name="ExerciseDetails" component={ExerciseDetailsScreen} />
          <Stack.Screen name="ProfileFood" component={ProfileFoodScreen} />

    
          <Stack.Screen name="SearchExercise" component={SearchExercise} />
          <Stack.Screen name="AddFood_AcaiScreen" component={EditDailyGoalsScreen} />
          <Stack.Screen name="AddFood_GoldfishScreen" component={AddFood_GoldfishScreen} />
          <Stack.Screen name="AddFood_TofuScreen" component={AddFood_TofuScreen} />
          <Stack.Screen name="SearchBreakfast" component={SearchBreakfast} />
         

         

        
           <Stack.Screen name="Home" component={Homepages} />
           <Stack.Screen name="DiaryFoodScreen" component={DiaryFoodScreen} />
         

          
          
        </Stack.Navigator>
      </NavigationContainer>
      </ApolloProvider>
    );
  }
  

export default AppNavigation;
