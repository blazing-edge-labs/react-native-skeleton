import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Text } from 'react-native'

import styles from './styles'

const errorCheck = meta => meta.touched && meta.error

const Input = ({ label, required, autoCapitalize, input, meta, multiline, ...rest }) => {
  const isError = errorCheck(meta)

  return (
    <View>
      <Text style={[styles.label, isError && styles.errorLabel]}>
        {label || ' '}
      </Text>
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

export default Input
