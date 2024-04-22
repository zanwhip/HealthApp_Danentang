import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Homepages from '../screens/Homepages';
import PlanScreen from '../screens/PlanScreen';
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

const Stack = createNativeStackNavigator();
function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerShown: false // Bỏ hiển thị header
        }}>
           {/* <Stack.Screen
                    name="BottomTabNavigation"
                    component={BottomTabNavigation}
                    options={{
                        headerShown: false,
                    }}
                /> */}
              
          {/* <Stack.Screen name="Home" component={Homepages} /> */}
          {/* <Stack.Screen name="Explore" component={ExploreScreen} /> */}
          {/* <Stack.Screen name="Plan" component={PlanScreen} /> */}
          {/* <Stack.Screen name="AddExercise" component={AddExerciseScreen} /> */}
          {/* <Stack.Screen name="EditDailyGoals" component={EditDailyGoalsScreen} /> */}
          {/* <Stack.Screen name="ExerciseDailyDiary" component={ExerciseDailyDiaryScreen} /> */}
          {/* <Stack.Screen name="ExerciseDetails" component={ExerciseDetailsScreen} /> */}
          {/* <Stack.Screen name="ProfileFood" component={ProfileFoodScreen} /> */}
          {/* <Stack.Screen name="SearchExercise" component={SearchExercise} /> */}
          {/* <Stack.Screen name="AddFood_AcaiScreen" component={EditDailyGoalsScreen} /> */}
          {/* <Stack.Screen name="AddFood_GoldfishScreen" component={AddFood_GoldfishScreen} /> */}
          {/* <Stack.Screen name="AddFood_TofuScreen" component={AddFood_TofuScreen} /> */}
          {/* <Stack.Screen name="SearchBreakfast" component={SearchBreakfast} /> */}
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  

  export default AppNavigation