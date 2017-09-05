import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

import { isChecked } from '../../utils/validations'
import styles from './styles'

const handlePress = (input, onPress) => {
  const { value } = input
  input.onChange(!value)

  typeof onPress === 'function' && onPress(!value)
}

const Checkbox = ({ input, onPress, label }) => {
  const checked = isChecked(input)

  return (
    <TouchableOpacity
      onPress={() => handlePress(input, onPress)}
    >
      <View style={styles.wrap}>
        <View style={[styles.outer, checked && styles.outerSelected]}>
          <Text>{checked && <Icon style={styles.checked} name='check' />}</Text>
        </View>
        <Text style={styles.label}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  onPress: PropTypes.func
}

export default Checkbox
