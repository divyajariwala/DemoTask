import React, {Component} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homescreen from '../screens/Homescreen';
import Cart from './Cart';
import Profile from './Profile';
const Tab = createBottomTabNavigator();

export default function Bottomtab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Homescreen"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Homescreen"
          component={Homescreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="rocket" size={30} color="#900" />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color, size}) => (
              <Icon name="rocket" size={30} color="#900" />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="rocket" size={30} color="#900" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
