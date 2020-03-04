import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#181818',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: "center", 
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <Header navigation={navigation} title='Gamezone Home'/> }} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details' }} />
      </Stack.Navigator>
  )
}

export default HomeStack;