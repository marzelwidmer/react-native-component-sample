import React from 'react'
import styles from './styles'
import {
    TouchableOpacity,
    Text,
} from 'react-native'

export const Button = () => (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.button}>Click Me</Text>
    </TouchableOpacity>
)

