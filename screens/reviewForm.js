import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(3),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    // allows you to define a function that takes in a rating function as a parameter. True/false
    // parameter 1 = name for the test; parameter 2 = message error; parameter 3 = callback function with the value entered
    .test('is-numb-1-5', 'Rating must be a number', (value) => {
      return parseInt(value) < 6 && parseInt(value) > 0 && value.length === 1
    })
})

export default ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        // actions contains functions
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
              // onBlur triggers the error real time, when you move away from the field (ideal)
              onBlur={formikProps.handleBlur('title')}
            />
            {/* props.touched keeps track of the form fields that has been touched */}
            <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title }</Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{ formikProps.touched.body && formikProps.errors.body }</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType='numeric'
              onBlur={formikProps.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{ formikProps.touched.rating && formikProps.errors.rating }</Text>

            <FlatButton text='submit' onPress={formikProps.handleSubmit}/>
            {/* <Button title='submit' color='maroon' onPress={formikProps.handleSubmit} /> */}
          </View>
        )}
      </Formik>
    </View>
  )
}