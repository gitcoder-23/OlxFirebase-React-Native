/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
/// firebase auth
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async () => {
    Keyboard.dismiss();
    if (!email || !password) {
      Alert.alert('', 'Please fill all fields');
    } else {
      try {
        const result = await auth().signInWithEmailAndPassword(email, password);
        console.log('login-result->', result.user);
      } catch (error) {
        console.log('err->', error);
        Alert.alert('', 'Something went wrong invalid credential');
      }
    }
  };
  return (
    <>
      <View
        style={{backgroundColor: '#fff', flex: 1, justifyContent: 'center'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : 'position'}>
          {/* <View style={styles.box1} onPress={Keyboard.dismiss}> */}
          <View style={styles.box1}>
            <Image
              source={require('../../assets/OLX-Logos.png')}
              style={{width: 150, height: 150}}
            />
            <Text style={styles.text}>Please login to continue</Text>
          </View>
          <View style={styles.box2}>
            <TextInput
              mode="outlined"
              label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              mode="outlined"
              label="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
            <Button
              // icon="camera"
              mode="contained"
              onPress={() => userLogin()}>
              Login
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{textAlign: 'center', color: '#000'}}>
                Don't have an account? Signup
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  box1: {
    alignItems: 'center',
    marginTop: 10,
  },
  box2: {
    paddingHorizontal: 40,
    backgroundColor: 'default',
    height: '50%',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 22,
  },
});
