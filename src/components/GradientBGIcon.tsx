import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SPACING } from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Ionicons'

interface GradientBGIconProps {
    name: string;
    color: string;
    size: number;
}

const GradientBGIcon: React.FC<GradientBGIconProps> = ({ name, color, size }) => {
    return (
        <View style={styles.Container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={styles.LinerGradientBG}
            />
            <Entypo name={name} color={color} size={size} style={styles.icon}/>
        </View>
    );
};

export default GradientBGIcon;

const styles = StyleSheet.create({
    Container: {
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: SPACING.space_12,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: 'hidden',
    },
    LinerGradientBG: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{padding:4},
});
