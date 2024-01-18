import {  Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const AuthScreen = () => {
  const userAuthentication = useStore((state: any): any => state.userAuthentication);
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <View style={styles.AuthContainer}>
        <Image source={require('../assets/auth-coffee-logo.png')} style={styles.Logo} />
        <Text style={styles.Quote}>Keep calm and drink tea.</Text>
        <TouchableOpacity onPress={()=>{userAuthentication();}}>
        <View style={styles.AuthButton}>
          <Image source={require('../assets/google-logo.png')} style={styles.GoogleLogo} />
          <Text>Authenticate</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  AuthContainer: {
    height: windowHeight - 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    height: 62,
    width: 74,
  },
  Quote: {
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_10,
    marginBottom: SPACING.space_30 + SPACING.space_30,
    fontSize: FONTSIZE.size_10
  },
  AuthButton: {
    width: 240,
    height: 50,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: '#D9D9D9',
    shadowColor: 'rgba(217, 180, 124, 0.25)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_8
  },
  GoogleLogo: {
    height: 21,
    width: 21
  },
  Authenticate: {
    color: COLORS.primaryBlackHex,
    fontSize: FONTSIZE.size_12
  }
})