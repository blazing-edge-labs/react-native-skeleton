import React from 'react'
import { TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

import Label from 'components/Label'
import InlineError from 'components/InlineError'
import { hasError } from 'utils/validator'
import styles from './styles'

const Input = ({ label, autoCapitalize, input, meta, multiline, disabled, keyboardType, ...rest }) => {
  const isError = hasError(meta)

  return (
    <View>
      <Label error={isError}>
        {label}
      </Label>
      <View style={[
        styles.inputWrapper,
        disabled && styles.inputWrapperDisabled,
        isError && styles.errorWrapper
      ]}>
        <TextInput
          underlineColorAndroid='transparent'
          autoCapitalize={autoCapitalize || 'words'}
          onChange={input.onChange}
          value={input.value}
          style={[styles.input, multiline && styles.multiline, disabled && styles.inputDisabled]}
          multiline={multiline}
          editable={!disabled}
          numberOfLines={multiline ? 4 : 1}
          keyboardType={keyboardType || 'default'}
          {...rest}
        />
      </View>
      <InlineError meta={meta} />
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  keyboardType: PropTypes.string
}

export default Input
