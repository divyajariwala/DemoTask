import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from './src/screens/Homescreen';
import Loginscreen from './src/screens/Loginscreen';
import Register from './src/screens/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
