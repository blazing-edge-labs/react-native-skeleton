import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import { hasError } from 'utils/validations'
import styles from './styles'

const InlineError = ({ meta, error }) => (
  <Text style={styles.error}>
    {error || (meta && hasError(meta) && meta.error)}
  </Text>
)

InlineError.propTypes = {
  meta: PropTypes.object,
  error: PropTypes.string
}

export default InlineError
