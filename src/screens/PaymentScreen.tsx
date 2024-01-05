import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import GradientBGIcon from '../components/GradientBGIcon'
import PaymentMethod from '../components/PaymentMethod'
import PaymentFooter from '../components/PaymentFooter'

const PaymentList = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
]
const PaymentScreen = ({navigation,route}:any) => {
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const buttonPressHandler=()=>{};
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={styles.HeaderContainer}>
          <TouchableOpacity onPress={()=>{navigation.pop();}}>
            <GradientBGIcon
              name="chevron-back"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_30}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Payments</Text>
          <View style={styles.EmptyView} />
        </View>
        <View style={styles.PaymentOptionContainer}>
          <TouchableOpacity onPress={()=>{
            setPaymentMode('Credit Card');
          }}>
            
          </TouchableOpacity>
          {PaymentList.map((data:any)=>(
            <TouchableOpacity key={data.name} onPress={()=>{setPaymentMode(data.name)}}>
              <PaymentMethod paymentMode={paymentMode} name={data.name} icon={data.icon} isIcon={data.isIcon}/>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <PaymentFooter buttonTitle={`Pay with ${paymentMode}`} price={{price:route.params.amount,currency:'$'}} buttonPressHandler={buttonPressHandler}/>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  HeaderContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  EmptyView: {
    height:SPACING.space_36,
    width:SPACING.space_36
  },
  PaymentOptionContainer:{
   padding:SPACING.space_15,
   gap:SPACING.space_15,
  }
})
