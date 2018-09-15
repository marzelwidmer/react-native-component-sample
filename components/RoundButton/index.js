import React from 'react'

import styles from './styles'
import {
    TouchableOpacity,
    Text, View,
} from 'react-native'

export const RoundButton = ({title, color, background, onPress, disabled}) => (

    <TouchableOpacity
        onPress={() => !disabled && onPress()}
        activeOpacity={disabled ? 1.0 : 0.7}
        style={[styles.button, {backgroundColor: background}]}>
        <View style={styles.buttonBorder}>
            <Text style={[styles.buttonTitle, {color}]}>
                {title}
            </Text>
        </View>
    </TouchableOpacity>

)

export const ButtonRow = ({children}) => {
    return (
        <View style={styles.buttonRow}>{children}</View>
    )
}