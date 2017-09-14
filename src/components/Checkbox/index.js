import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

import { isChecked } from 'utils/validator'
import styles from './styles'

const handlePress = (input, onPress) => {
  const { value } = input
  input.onChange(!value)

  typeof onPress === 'function' && onPress(!value)
}

const Checkbox = ({ input, onPress, label, disabled }) => {
  const checked = isChecked(input)

  return (
    <TouchableOpacity
      onPress={() => !disabled && handlePress(input, onPress)}
      disabled={disabled}
    >
      <View style={styles.wrap}>
        <View style={[
          styles.outer,
          disabled && styles.outerDisabled,
          checked && (disabled ? styles.outerSelectedDisabled : styles.outerSelected)
        ]}>
          <Text>
            {checked && <Icon style={[styles.check, disabled && styles.checkDisabled]} name='check' />}
          </Text>
        </View>
        <Text style={[styles.label, disabled && styles.labelDisabled]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
}

export default Checkbox
