import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import RenderList from './RenderList';
import firestore from '@react-native-firebase/firestore';

const ListItemScreen = () => {
  const [allItems, setAllItems] = useState([]);
  const [isLoading] = useState(false);
  const myItems = [
    {
      id: 1,
      name: 'IPhone',
      year: '2017',
      phone: '5874587412',
      image:
        'https://images.unsplash.com/photo-1640437830863-8f7f38327319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      desc: 'I am selling Iphone',
    },
    {
      id: 2,
      name: 'Camera',
      year: '2018',
      phone: '7897458745',
      image:
        'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      desc: 'I am selling Camera',
    },
  ];

  const getDetails = async () => {
    const querySnap = await firestore().collection('ads').get();
    // get array
    const result = querySnap.docs.map(docSnap => docSnap.data());
    // console.log('result-List->', result);
    if (result) {
      setAllItems(result);
    } else {
      setAllItems([]);
    }
  };

  // console.log('allItems->', allItems);

  useEffect(() => {
    getDetails();
    return () => {
      console.log('Cleanup');
    };
  }, []);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Object.keys(allItems).length > 0 ? allItems : []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, idx}) => {
          return (
            <>
              <RenderList item={item} />
            </>
          );
        }}
        refreshing={isLoading}
      />
    </View>
  );
};

export default ListItemScreen;

const styles = StyleSheet.create({});
