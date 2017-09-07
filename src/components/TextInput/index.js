import React from 'react'
import { TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

import Label from 'components/Label'
import InlineError from 'components/InlineError'
import { hasError } from 'utils/validations'
import styles from './styles'

// TODO: Visual representation of required fields, focus state

const Input = ({ label, required, autoCapitalize, input, meta, multiline, disabled, ...rest }) => {
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
  disabled: PropTypes.bool
}

export default Input
