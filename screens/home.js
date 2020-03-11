import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: 'Zelda', rating: 5, body: 'some text', key: '1' },
    { title: 'Streets of Rage', rating: 4, body: 'some text2', key: '2' },
    { title: 'Final Fantasy', rating: 3, body: 'some text3', key: '3' },
  ])

  // 2nd parameter is an object passed in as props. So we pass the entire reviews 'item'
  const pressHandler = (item) => {
    navigation.navigate('ReviewDetails', item)
  }

  const addReview = (review) => {
    // Not the best way to generate a key
    review.key = Math.random().toString()
    // With this hook, the argument or parameter of currentReviews is the entire current state of the Reviews
    setReviews((currentReviews) => {
      // so it takes the new review and adds it to the others with the spread operator
      return [review, ...currentReviews]
    });
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setModalOpen(false)}
          />
          <Text>Hello from the modal</Text>
          <ReviewForm addReview={addReview}/>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
})
