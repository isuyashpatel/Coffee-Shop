import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store'
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const windowHeight = Dimensions.get('window').height

const AuthScreen = () => {
  const userAuthentication = useStore(
    (state: any): any => state.userAuthentication,
  )
  const [mail, setMail] = useState('')
  const [validationMail,setValidationMail]=useState(false);
  const handleMailChange = (text: string) => {
    setMail(text)
  }
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <View style={styles.AuthContainer}>
        <Image
          source={require('../assets/auth-coffee-logo.png')}
          style={styles.Logo}
        />
        <Text style={styles.Quote}>Keep calm and drink tea.</Text>
        <View style={styles.MailContainer}>
          {!validationMail?<View style={styles.InputContainer}>
            <Ionicons
              name="mail"
              size={FONTSIZE.size_24}
              color={COLORS.secondaryLightGreyHex}
            />
            <TextInput
              style={styles.mail}
              placeholder="yourmail@gmail.com"
              onChangeText={handleMailChange}
              value={mail}
            />
          </View>
          :
          <>
          <Text style={styles.OtpText}>OTP sent to email.</Text>
          <OTPInputView
            style={styles.OtpContainer}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code => {
              console.log(`Code is ${code}, you are good to go!`)
            })}
          />
          </>
          }
          <TouchableOpacity
            onPress={() => {
              userAuthentication();
              setValidationMail(true)
            }}
          >
            <View style={styles.AuthButton}>
              <Text style={styles.Authenticate}>Continue</Text>
            </View>
          </TouchableOpacity>
        {validationMail?<TouchableOpacity onPress={()=>{setValidationMail(false)}}>
          <Text style={styles.Back}>Back</Text>
        </TouchableOpacity>:null}
      </View>
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
    fontSize: FONTSIZE.size_10,
  },
  MailContainer: {
    gap: SPACING.space_20,
  },
  AuthButton: {
    width: 240,
    height: 50,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
    shadowColor: 'rgba(217, 180, 124, 0.25)',
    shadowOffset: { width: 1, height: -1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Authenticate: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.poppins_extrabold,
  },
  mail: {
    width: 200,
    color: COLORS.primaryGreyHex,
  },
  InputContainer: {
    width: 240,
    height: 50,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryWhiteHex,
    shadowColor: 'rgba(217, 180, 124, 0.25)',
    shadowOffset: { width: 1, height: -1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  OtpContainer:{
    width: 240,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  OtpText:{
    color:COLORS.primaryWhiteHex,
    fontSize:FONTSIZE.size_12,
    fontFamily:FONTFAMILY.poppins_extrabold,
    textAlign:'center'
  },
  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  underlineStyleBase: {
    width: 36,
    height: 50,
    borderWidth: 1,
    shadowColor: 'rgba(217, 180, 124, 0.25)',
        shadowOffset: {
          width: -1,
          height: -1,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        backgroundColor:COLORS.primaryWhiteHex,
        borderRadius:BORDERRADIUS.radius_8,
        color:COLORS.primaryBlackHex
  },
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  Back:{
    color:COLORS.primaryWhiteHex,
    fontSize:FONTSIZE.size_12,
    fontFamily:FONTFAMILY.poppins_extrabold,
    textAlign:'center',
    textDecorationLine:'underline'
  },
})
