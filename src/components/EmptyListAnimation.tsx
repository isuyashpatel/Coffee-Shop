import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface EmptyListAnimationProps{
  title:string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default EmptyListAnimation

const styles = StyleSheet.create({})