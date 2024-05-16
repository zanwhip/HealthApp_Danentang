import { View, Text, Platform, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { useTheme } from '../themes/ThemeProvider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Homepages from '../screens/Homepages';
import ExploreScreen from '../screens/ExploreScreen';
import DiaryFoodScreen from '../screens/DiaryFoodScreen';
import ProfileFoodScreen from '../screens/ProfileFoodScreen';
import CenterControl from '../components/CenterControl';
import AppNavigation from '../navigations/AppNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'relative',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 80,
          backgroundColor: colors.primary,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Homepages}
        options={{
          headerShown: false,
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: COLORS.blue,
            height: 100,
          },
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons 
              name="view-dashboard"                
                size={32}
                color={focused ? COLORS.focus : COLORS.unfocus}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Explore'
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons name="explore" size={36}
                                color={
                                    focused
                                    ? COLORS.focus
                                    : COLORS.unfocus
                                }
                            />
            );
          },
        }}
      />

      <Tab.Screen
        name='center'
        component={DiaryFoodScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <CenterControl focused={focused} navigation={navigation}/>;
          },
        }}
      />

      <Tab.Screen
        name='Dairy'
        component={DiaryFoodScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons name="history" size={36} 
              color={
                  focused
                  ? COLORS.focus
                  : COLORS.unfocus
              }
          />
            );
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileFoodScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                 <AntDesign name="user" size={32}
                                color={
                                    focused
                                    ? COLORS.focus
                                    : COLORS.unfocus
                                }
                            />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
