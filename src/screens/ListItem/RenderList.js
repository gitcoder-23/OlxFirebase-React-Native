import {Alert, Linking, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const RenderList = ({item}) => {
  const LeftContent = props => <Avatar.Text {...props} label={item.name} />;
  const openDial = async phone => {
    console.log('item.phone->', phone);
    try {
      if (Platform.OS === 'android') {
        Linking.openURL(`tel:${phone}`);
      } else {
        Linking.openURL(`telprompt:${phone}`);
      }
    } catch (error) {
      Alert.alert('', 'Something wrong!');
    }
  };
  return (
    <>
      <Card style={styles.card}>
        <Card.Title
          title={item.name}
          // subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          {/* <Title>{item.name}</Title> */}
          <Paragraph>{item.desc}</Paragraph>
          <Paragraph>{item.year}</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: item.image}} />
        <Card.Actions>
          <Button>{item.price}</Button>
          <Button onPress={() => openDial(item.phone)}>Call Seller</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

export default RenderList;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 2,
  },
});
