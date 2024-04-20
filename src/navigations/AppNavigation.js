import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Homepages from '../screens/Homepages';
import PlanScreen from '../screens/PlanScreen';
import ExploreScreen from '../screens/ExploreScreen';
import BottomTabNavigation from './BottomTabNavigation';
import AddExerciseScreen from '../screens/AddExerciseScreen';
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
          <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  

  export default AppNavigation