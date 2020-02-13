import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Import all views from ./src/pages here and include below in the stack navigator 
import Home from './src/pages/Home.js'
import Contact from './src/pages/Contact.js'

const Stack = createStackNavigator()

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Contact" component={Contact}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}