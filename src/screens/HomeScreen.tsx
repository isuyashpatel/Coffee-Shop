import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import Feather from 'react-native-vector-icons/Feather'

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
}

const getCoffeeList = (category: string, data: any) => {
  if (category === 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
}

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList));
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });

  const [sortedCoffee, setSortedCoffee] = useState(getCoffeeList(categoryIndex.category, CoffeeList));

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        {/* APP HEADER */}
        <HeaderBar title={'Home'} />
        <Text style={styles.ScreenTitle}>Find the best{'\n'}coffee for you</Text>
        {/* SEARCH INPUT */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={()=>{}}>
           <Feather style={styles.InputIcon} name='search' size={FONTSIZE.size_18} color={searchText.length>0?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
          </TouchableOpacity>
          <TextInput placeholder='Find Your Coffee..' value={searchText} onChangeText={text=>setSearchText(text)} placeholderTextColor={COLORS.primaryLightGreyHex} style={styles.TextInputContainer}/>
        </View>

        {/* CATEGORY SCROLLER */}
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle:{
    fontSize:FONTSIZE.size_20,
    fontFamily:FONTFAMILY.poppins_semibold,
    color:COLORS.primaryWhiteHex,
    paddingLeft:SPACING.space_30,
  },
  InputContainerComponent:{
    flexDirection:'row',
    margin: SPACING.space_30,
    borderRadius:BORDERRADIUS.radius_20,
    backgroundColor:COLORS.primaryDarkGreyHex,
    alignItems:'center'
  },
  InputIcon:{
    marginHorizontal:SPACING.space_20,

  },
  TextInputContainer:{
    flex:1,
    height:SPACING.space_20*3,
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_14,
    color:COLORS.primaryWhiteHex

  }
})