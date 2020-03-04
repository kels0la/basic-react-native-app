import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
  const { body, rating, title } = route.params;

  const pressHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  )
};