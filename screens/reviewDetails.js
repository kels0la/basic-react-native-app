import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
  const { body, rating, title } = route.params;

  const pressHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: <Image source={images.ratings[rating]} /></Text>
          
        </View>
        <Button title='back to home screen' onPress={pressHandler} />
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({

})