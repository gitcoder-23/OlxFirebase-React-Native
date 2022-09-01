/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthStackNavigator from './src/screens/AppMenuNavigation/AuthStackNavigator';
import TabNavigator from './src/screens/AppMenuNavigation/TabNavigator';
import auth from '@react-native-firebase/auth';

// navigation theme default
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'rgb(255, 45, 85)',
    background: '#fcfafa',
  },
};

const AppNavigation = () => {
  // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // const user = 'ABCD';

  const [user, setUser] = useState('');
  // check user exists or not after login
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(userExist => {
      if (userExist) {
        setUser(userExist);
      } else {
        setUser('');
      }
    });
    // unsubscribe on unmount
    return unsubscribe;
  }, []);
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        {user ? <TabNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </>
  );
};

const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>Hello World</Text>
        </ScrollView>
      </SafeAreaView> */}
      <StatusBar barStyle="light-content" backgroundColor="#2962ff" />
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
