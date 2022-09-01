import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const CreateAdScreen = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');

  const postData = async () => {
    if (!name || !desc || !year || !price || !phone) {
      Alert.alert('', 'Please fill all the fields');
    } else {
      const usersCollection = firestore().collection('ads');
      try {
        let result = await usersCollection.add({
          name,
          desc,
          year,
          price,
          phone,
          image:
            'https://images.unsplash.com/photo-1640437830863-8f7f38327319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
          uid: auth().currentUser.uid,
        });
        Alert.alert('', 'Ad posted!', [
          {
            text: 'OK',
            onPress: () => {
              setName('');
              setDesc('');
              setYear('');
              setPrice('');
              setPhone('');
              setImage('');
            },
          },
        ]);
      } catch (error) {
        console.log(error);
        Alert.alert('', 'Something went wrong. Try again');
      }
    }
  };

  return (
    <>
      {/* <KeyboardAvoidingView behavior="position" style={styles.container}> */}
      <View style={styles.container}>
        <Text style={styles.text}>Create Ad!</Text>
        <TextInput
          label="Ad title"
          mode="outlined"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          label="Describe what you are selling"
          mode="outlined"
          numberOfLines={3}
          multiline={true}
          value={desc}
          onChangeText={text => setDesc(text)}
        />
        <TextInput
          label="Year of purchase"
          mode="outlined"
          // keyboardType="number-pad"
          keyboardType="numeric"
          value={year}
          onChangeText={text => setYear(text)}
        />
        <TextInput
          label="Price in INR"
          mode="outlined"
          keyboardType="numeric"
          value={price}
          onChangeText={text => setPrice(text)}
        />
        <TextInput
          label="Your contact number"
          mode="outlined"
          keyboardType="numeric"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Upload Image
        </Button>
        <Button mode="contained" onPress={() => postData()}>
          Post
        </Button>
      </View>
      {/* </KeyboardAvoidingView> */}
    </>
  );
};

export default CreateAdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: 'space-evenly',
  },
  text: {
    fontWeight: '500',
    fontSize: 22,
    textAlign: 'center',
  },
});
