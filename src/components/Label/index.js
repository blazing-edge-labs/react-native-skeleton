import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Label = ({ children, error, required }) => (
  <Text style={[styles.label, error && styles.error]}>
    {children}
    {required && <Text> *</Text>}
  </Text>
)

Label.propTypes = {
  children: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  required: PropTypes.bool
}

export default Label
