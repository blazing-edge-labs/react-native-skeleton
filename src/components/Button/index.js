import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Button = ({ onPress, children, disabled }) => {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      activeOpacity={!disabled ? 0.2 : 1}
    >
      <View style={[styles.wrap, disabled && styles.wrapDisabled]}>
        <Text style={[styles.text, disabled && styles.textDisabled]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default Button
