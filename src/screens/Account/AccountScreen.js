import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

import {Button, TextInput} from 'react-native-paper';

const AccountScreen = () => {
  const userLogout = () => {
    auth().signOut();
  };
  return (
    <View>
      <Text>{auth().currentUser.email}</Text>

      <Button
        // icon="camera"
        mode="contained"
        onPress={() => userLogout()}>
        Logout
      </Button>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
