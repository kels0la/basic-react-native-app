import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';

import About from '../screens/about';
import Home from '../screens/home';

const Stack = createStackNavigator();

function aboutStack({ navigation }) {
  return (
      <Stack.Navigator
        initialRouteName="About"
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
        <Stack.Screen name="About" component={About} options={{ headerTitle: () => <Header navigation={navigation} title='About Gamezone'/> }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      </Stack.Navigator>
  )
}

export default aboutStack;