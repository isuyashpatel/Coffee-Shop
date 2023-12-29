import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation,route}:any) => {
  console.log('route=', route.params);
  
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})