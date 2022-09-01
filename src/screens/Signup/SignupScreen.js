/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';

/// firebase auth
import auth from '@react-native-firebase/auth';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignup = async () => {
    if (!email || !password) {
      Alert.alert('', 'Please fill all fields');
    } else {
      try {
        const result = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        console.log('signup-result->', result.user);
      } catch (error) {
        console.log('err->', error);
        Alert.alert('', 'Something went wrong add different credential');
      }
    }
  };
  return (
    <>
      <View
        style={{backgroundColor: '#fff', flex: 1, justifyContent: 'center'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : 'position'}>
          <View style={styles.box1}>
            <Image
              source={require('../../assets/OLX-Logos.png')}
              style={{width: 150, height: 150}}
            />
            <Text style={styles.text}>Please signup!</Text>
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
              onPress={() => userSignup()}>
              Signup
            </Button>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{textAlign: 'center', color: '#000'}}>
              Already have an account? Login
            </Text>
          </TouchableOpacity> */}

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{textAlign: 'center', color: '#000'}}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default SignupScreen;

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
