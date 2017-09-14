import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import { isSelected } from 'utils/validator'
import styles from './styles'

const handlePress = (input, meta, val, onPress) => {
  input.onChange(val)

  typeof onPress === 'function' && onPress(val)
}

const Radio = ({ input, val, label, meta, onPress, disabled }) => {
  const selected = isSelected(input, val)

  return (
    <TouchableOpacity
      onPress={() => !disabled && handlePress(input, meta, val, onPress)}
      disabled={disabled}
    >
      <View style={styles.wrap}>
        <View style={[
          styles.outer,
          disabled && styles.outerDisabled,
          selected && (!disabled ? styles.outerSelected : styles.outerSelectedDisabled)
        ]}>
          {selected && <View style={styles.inner} />}
        </View>
        <Text style={[styles.label, disabled && styles.labelDisabled]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  val: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  onPress: PropTypes.func,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  disabled: PropTypes.bool
}

export default Radio
