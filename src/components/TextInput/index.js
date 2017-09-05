import React from 'react'
import { TextInput, View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { hasError } from '../../utils/validations'
import Label from '../Label'
import styles from './styles'

// TODO: Visual representation of required fields, focus state

const errorCheck = meta => meta.touched && meta.error

const Input = ({ label, required, autoCapitalize, input, meta, multiline, ...rest }) => {
  const isError = hasError(meta)

  return (
    <View>
      <Label error={isError}>
        {label}
      </Label>
      <View style={[styles.inputWrapper, isError && styles.errorWrapper]}>
        <TextInput
          underlineColorAndroid='transparent'
          autoCapitalize={autoCapitalize || 'words'}
          onChange={input.onChange}
          value={input.value}
          style={[styles.input, multiline && styles.multiline]}
          multiline={multiline}
          numberOfLines={multiline && 4 || 1}
          {...rest}
        />
      </View>
      <Text style={styles.error}>
        {isError && meta.error}
      </Text>
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default Input
