import { StyleSheet } from 'react-native'

import { colors } from 'styles/variables'

export default StyleSheet.create({
  wrap: {
    flex: 1,
    marginBottom: 20
  },
  input: {
    height: 40,
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 10,
    alignItems: 'center',
    color: 'black'
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black'
  },
  errorWrapper: {
    borderColor: colors.error
  },
  multiline: {
    textAlignVertical: 'top',
    height: 120,
    alignItems: 'flex-start'
  },
  inputWrapperDisabled: {
    borderColor: colors.disabledDarker,
    backgroundColor: colors.disabledLighter
  },
  inputDisabled: {
    color: colors.disabledDarker
  }
})
