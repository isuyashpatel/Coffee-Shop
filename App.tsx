import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigators/TabNavigator'
import SplashScreen from 'react-native-splash-screen'
import { useStore } from './src/store/store'
import AuthScreen from './src/screens/AuthScreen'

const Stack = createNativeStackNavigator();

const App = () => {

  const auth= useStore((state:any)=>state.auth)
  useEffect(() => {
    
    SplashScreen.hide();

  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth?
        <>
         <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ animation: 'slide_from_bottom' }} />
        </>
        :
        <Stack.Screen name="Authentication" component={AuthScreen}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})