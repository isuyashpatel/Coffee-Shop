import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import HeaderBar from '../components/HeaderBar'
import EmptyListAnimation from '../components/EmptyListAnimation'
import { COLORS, SPACING } from '../theme/theme'
import FavouritesItemCard from '../components/FavouritesItemCard'

const FavoritesScreen = ({navigation}:any) => {
  const FavouriteList=useStore((state:any)=>state.FavouriteList);
  const tabBarHeight=useBottomTabBarHeight();
  
  const addToFavouriteList = useStore((state: any) => state.addToFavouriteList);
  const deleteFromFavouriteList = useStore((state: any) => state.deleteFromFavouriteList);

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavouriteList(type, id) : addToFavouriteList(type, id)
  }
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View
          style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}
        >
          <View style={styles.ItemContainer}>
            <HeaderBar title="Favourites" />
            {FavouriteList.length == 0 ? (
              <EmptyListAnimation title={'No Favourites'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {FavouriteList.map((data: any) => (
                  <TouchableOpacity onPress={() => {navigation.push('Details',{index:data.index,id:data.id,type:data.type})}} key={data.id}>
                  <FavouritesItemCard
                  id={data.id}
                  imagelink_portrait={data.imagelink_portrait}
                  name={data.name}
                  special_ingredient={data.special_ingredient}
                  type={data.type}
                  ingredients={data.ingredients}
                  average_rating={data.average_rating}
                  ratings_count={data.ratings_count}
                  roasted={data.roasted}
                  description={data.description}
                  favourite={data.favourite}
                  ToggleFavouriteItem={ToggleFavourite}
                  />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
})