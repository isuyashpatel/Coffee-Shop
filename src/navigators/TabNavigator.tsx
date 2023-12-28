import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import Icon  from 'react-native-vector-icons/AntDesign';
import IconEntypo  from 'react-native-vector-icons/Entypo';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
const Tab =createBottomTabNavigator();

const TabNavigator = () => {
  return (
 <Tab.Navigator
 screenOptions={{
  tabBarHideOnKeyboard:true,
  headerShown:false,
  tabBarShowLabel:false,
  tabBarStyle:styles.tabBarStyle,
  tabBarBackground:()=>(
    <BlurView
    overlayColor=''
    blurAmount={15}
    style={styles.BlurViewStyles}/>
  )
 }}
 >
 <Tab.Screen name='Home' component={HomeScreen}
  options={{
  tabBarIcon:({focused,color,size})=>(<Icon name='home' size={25} color={focused? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>)
 }}></Tab.Screen>
 <Tab.Screen name='Cart' component={CartScreen} options={{
  tabBarIcon:({focused,color,size})=>(
    <FontAwesome6 name='cart-plus' size={25} color={focused? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
   )
 }}></Tab.Screen>
 <Tab.Screen name='Favorite' component={FavoritesScreen} options={{
  tabBarIcon:({focused,color,size})=>(
    <Icon name='heart' size={25} color={focused? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>)
 }}></Tab.Screen>
 <Tab.Screen name='History' component={OrderHistoryScreen} options={{
  tabBarIcon:({focused,color,size})=>(
    <IconEntypo name='bell' size={25} color={focused? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>)
 }}></Tab.Screen>
 </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
tabBarStyle:{
height:80,
position:'absolute',
backgroundColor:COLORS.primaryBlackRGBA,
borderTopWidth:0,
elevation:0,
borderTopColor:'transparent'
},
BlurViewStyles:{
position:'absolute',
top:0,
bottom:0,
left:0,
right:0
}
})