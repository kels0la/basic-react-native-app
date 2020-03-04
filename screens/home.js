import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    {title: 'Zelda', rating: 5, body: 'some text', key: '1'},
    {title: 'Streets of Rage', rating: 4, body: 'some text2', key: '2'},
    {title: 'Final Fantasy', rating: 3, body: 'some text3', key: '3'},
  ])

  // 2nd parameter is an object passed in as props. So we pass the entire reviews 'item'
  const pressHandler = (item) => {
    navigation.navigate('ReviewDetails', item)
  }
  
  return (
    <View style={globalStyles.container}>
      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
};
