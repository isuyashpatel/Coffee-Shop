import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import GradientBGIcon from './GradientBGIcon'
import ProfilePic from './ProfilePic'

interface HeaderBarProps {
    title?: string
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
    return (
        <View style={styles.HeaderContainer}>
            <GradientBGIcon name='grid' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_30}/>
            <Text style={styles.HeaderText}>{title}</Text>
            <ProfilePic/>
        </View>
    )
}

export default HeaderBar

const styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_30,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },
})
