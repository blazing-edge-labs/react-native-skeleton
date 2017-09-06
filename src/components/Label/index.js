import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

// TODO: Required missing

const Label = ({ children, error }) => (
  <Text style={[styles.label, error && styles.error]}>
    {children}
  </Text>
)

Label.propTypes = {
  children: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
}

export default Label
