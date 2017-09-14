import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Button = ({ onPress, children, disabled, error }) => {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      disabled={disabled}
    >
      <View style={[styles.wrap, disabled && styles.wrapDisabled, error && styles.error]}>
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
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
}

export default Button
