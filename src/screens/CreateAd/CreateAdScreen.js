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
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const CreateAdScreen = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transfered, setTransfered] = useState(0);

  const postData = async () => {
    if (!name || !desc || !year || !price || !phone || !image) {
      Alert.alert('', 'Please fill all the fields');
    } else {
      submitPhoto();
      const usersCollection = firestore().collection('ads');
      try {
        let result = await usersCollection.add({
          name,
          desc,
          year,
          price,
          phone,
          image,
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
    // submitPhoto();
  };

  // const openCamera = () => {
  //   launchCamera({quality: 0.5}, fileObj => {
  //     console.log('fileObjA->', fileObj.assets[0].uri, typeof fileObj);
  //     const uploadTask = storage()
  //       .ref()
  //       .child(`/items/${Date.now()}`)
  //       // .putFile(fileObj && fileObj.assets ? fileObj.assets[0].uri : '');
  //       .putFile(fileObj.uri);

  //     // operation
  //     uploadTask.on(
  //       'state_changed',
  //       snapshot => {
  //         var progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log('Upload is ' + progress + '% done');

  //         if (progress == 100) {
  //           Alert.alert('', 'Uploaded!');
  //         }
  //       },
  //       error => {
  //         // Handle unsuccessful uploads
  //         Alert.alert('', 'Something went wrong!');
  //       },
  //       () => {
  //         // Handle successful uploads on complete
  //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //         uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
  //           console.log('File available at', downloadURL);
  //           setImage(downloadURL);
  //         });
  //       },
  //     );
  //   });
  // };

  // const openCamera = () => {
  //   launchImageLibrary({quality: 0.5}, fileobj => {
  //     console.log(fileobj);
  //     const uploadTask = storage()
  //       .ref()
  //       .child(`/items/${Date.now()}`)
  //       .putFile(fileobj && fileobj.assets ? fileobj.assets[0].uri : '');
  //     uploadTask.on(
  //       'state_changed',
  //       snapshot => {
  //         var progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         if (progress == 100) {
  //           alert('uploaded');
  //         }
  //       },
  //       error => {
  //         alert('something went wrong');
  //       },
  //       () => {
  //         // Handle successful uploads on complete
  //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //         uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
  //           setImage(downloadURL);
  //         });
  //       },
  //     );
  //   });
  // };

  const takePhotoFromCamera = async () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // console.warn(image.path);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  console.log('image->', image);

  const submitPhoto = async () => {
    const uploadUri = image;
    let fileName = await uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    console.log('fileName->', fileName);
    setUploading(true);
    try {
      await storage()
        .ref(fileName)
        .child(`/items/${Date.now()}`)
        .putFile(uploadUri);
      setUploading(false);
      Alert.alert('', 'Image uploaded');
    } catch (error) {
      console.warn('error->', error);
      // Alert.alert('', 'Something wrong!!');
    }
    setImage(null);
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
          onPress={() => takePhotoFromCamera()}>
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
