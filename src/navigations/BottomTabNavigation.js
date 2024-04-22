import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import { useTheme } from '../themes/ThemeProvider'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Homepages from '../screens/Homepages';
import ExploreScreen from '../screens/ExploreScreen';
import ExerciseDailyDiaryScreen from '../screens/ExerciseDailyDiaryScreen';
import ProfileFoodScreen from '../screens/ProfileFoodScreen';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()


const BottomTabNavigation = () => {
    const { colors } = useTheme()
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                height: 80,
                backgroundColor: colors.primary,
            }
        }}>
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                      return (
                            <MaterialCommunityIcons name="view-dashboard-outline" size={36} color={
                                focused
                                    ? COLORS.focus
                                    : COLORS.unfocus
                            } />
                            
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Game"
                component={Homepages}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            // <MaterialIcons name="explore" size={24} color="black" />
                            <MaterialIcons name="explore" size={36}
                                color={
                                    focused
                                    ? COLORS.focus
                                    : COLORS.unfocus
                                }
                            />
                        )
                    },
                }}
            />

            <Tab.Screen
                name="ChatBot"
                component={Homepages}
                
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary,
                                height: Platform.OS == 'ios' ? 80 : 60,
                                width: Platform.OS == 'ios' ? 80 : 60,
                                top: Platform.OS == 'ios' ? -30 : -20,
                                borderRadius:
                                    Platform.OS == 'ios' ? 50 : 30,
                                borderWidth: 10,
                                
                                borderColor: COLORS.background,
                               
                            }}
                        >
                          <FontAwesome6 name="add" size={36} color={
                                    focused
                                    ? COLORS.focus
                                    : COLORS.unfocus
                                } />
                        </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="ExerciseDailyDiary"
                component={ExerciseDailyDiaryScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                {/* <MaterialIcons name="history" size={24} color="black" /> */}
                                <MaterialIcons name="history" size={36} 
                                color={
                                    focused
                                    ? COLORS.focus
                                    : COLORS.unfocus
                                }
                            />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileFoodScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                          
                            <View>
                                <AntDesign name="user" size={36}
                                color={
                                    focused
                                    ? COLORS.focus
                                    : COLORS.unfocus
                                }
                            />
                            </View>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation
