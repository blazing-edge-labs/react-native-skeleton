import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Label = ({ children, error }) => (
  <Text style={[styles.label, error && styles.error]}>
    {children}
  </Text>
)

Label.propTypes = {
  children: PropTypes.string.isRequired
}

export default Label
