import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RenderList from './RenderList';

const ListItemScreen = () => {
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
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={myItems}
        keyExtractor={item => (item.id ? item.id.toString() : '')}
        renderItem={({item, idx}) => {
          return (
            <>
              <RenderList item={item} />
            </>
          );
        }}
      />
    </View>
  );
};

export default ListItemScreen;

const styles = StyleSheet.create({});
