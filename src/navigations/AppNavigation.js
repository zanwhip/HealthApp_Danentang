import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Homepages from '../screens/Homepages';
import ExploreScreen from '../screens/ExploreScreen';
import BottomTabNavigation from './BottomTabNavigation'
const Stack = createNativeStackNavigator();
function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerShown: false // Bỏ hiển thị header
        }}>
           <Stack.Screen
                    name="BottomTabNavigation"
                    component={BottomTabNavigation}
                    options={{
                        headerShown: false,
                    }}
                />
          {/* <Stack.Screen name="Home" component={Homepages} /> */}
          <Stack.Screen name="Explore" component={ExploreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  

  export default AppNavigation