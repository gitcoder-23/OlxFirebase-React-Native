import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const RenderList = ({item}) => {
  const LeftContent = props => <Avatar.Text {...props} label={item.name} />;
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
          <Button>200</Button>
          <Button>Call Seller</Button>
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
