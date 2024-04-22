import { View, Text, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { useTheme } from '../themes/ThemeProvider';

import Homepages from '../screens/Homepages';
import ExploreScreen from '../screens/ExploreScreen';
import HeaderHomePages from '../components/headerHomePages';
import DiaryFoodScreen from '../screens/DiaryFoodScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
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
      {/* <Tab.Screen
        name='Home'
        component={Homepages}
        options={{
          headerShown: true,
          headerTitle: () => <HeaderHomePages />,
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: COLORS.blue,
            height: 100,
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name='home'
                size={24}
                color={focused ? COLORS.focus : COLORS.unfocus}
              />
            );
          },
        }}
      /> */}
      <Tab.Screen
        name='Home'
        component={DiaryFoodScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name='home'
                size={24}
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
              <AntDesign
                name='home'
                size={24}
                color={focused ? COLORS.focus : COLORS.unfocus}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name='Game'
        component={Homepages}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name='game-controller-outline'
                size={24}
                color={focused ? COLORS.focus : COLORS.unfocus}
              />
            );
          },
        }}
      /> */}

      <Tab.Screen
        name='ChatBot'
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
                  borderRadius: Platform.OS == 'ios' ? 50 : 30,
                  borderWidth: 10,

                  borderColor: COLORS.background,
                }}
              ></View>
            );
          },
        }}
      />

      <Tab.Screen
        name='scan'
        component={Homepages}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Ionicons
                  name='game-controller-outline'
                  size={24}
                  color={focused ? COLORS.focus : COLORS.unfocus}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Homepages}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Ionicons
                  name='game-controller-outline'
                  size={24}
                  color={focused ? COLORS.focus : COLORS.unfocus}
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
