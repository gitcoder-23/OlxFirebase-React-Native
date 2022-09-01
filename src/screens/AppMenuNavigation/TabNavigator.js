import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListItemScreen from '../ListItem/ListItemScreen';
import AccountScreen from '../Account/AccountScreen';
import CreateAdScreen from '../CreateAd/CreateAdScreen';

import Feather from 'react-native-vector-icons/Feather';

const myOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#2962ff',
    height: Platform.OS === 'ios' ? 90 : 40,
  },
  headerTitleAlign: 'center',

  headerTitleStyle: {
    fontSize: 23,
    fontWeight: Platform.OS === 'ios' ? '500' : '100',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-sarif',
  },
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          // headerShown: true,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            // if (route.name === 'Home') {
            //   iconName = focused
            //     ? 'ios-information-circle'
            //     : 'ios-information-circle-outline';
            // } else if (route.name === 'CreateAd') {
            //   iconName = focused ? 'ios-list-box' : 'ios-list';
            // }
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'CreateAd') {
              iconName = 'plus-circle';
            } else if (route.name === 'UserAccount') {
              iconName = 'user';
            } else {
              return;
            }

            // return <Feather name={iconName} size={size} color={color} />;
            return (
              <View
                style={{
                  backgroundColor: '#fff',
                  borderWidth: 10,
                  borderColor: '#fff',
                  borderRadius: 30,
                  top: -20,
                }}>
                <Feather name={iconName} size={30} color={color} />
              </View>
            );
          },
          tabBarActiveTintColor: '#2962ff',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Home"
          component={ListItemScreen}
          // options={{title: 'Home New'}}
          options={{...myOptions, headerShown: true}}
        />
        <Tab.Screen
          name="CreateAd"
          component={CreateAdScreen}
          // options={{tabBarBadge: 3}}
          options={{...myOptions, headerShown: true}}
        />
        <Tab.Screen
          name="UserAccount"
          component={AccountScreen}
          options={{...myOptions, headerShown: true}}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
