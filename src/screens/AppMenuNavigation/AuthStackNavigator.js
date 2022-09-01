import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Login/LoginScreen';
import SignupScreen from '../Signup/SignupScreen';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({});
