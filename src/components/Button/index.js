import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import styles from './styles'

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrap}>
        <Text style={styles.text}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
