import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';

const CreateAdScreen = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');

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
        <Button mode="contained" onPress={() => console.log('Pressed')}>
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
