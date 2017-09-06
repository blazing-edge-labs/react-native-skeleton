import { StyleSheet, Platform } from 'react-native'

import { colors } from 'styles/variables'

export default StyleSheet.create({
  wrap: {
    flex: 1,
    paddingBottom: 10
  },
  label: {
    color: colors.font
  },
  asterisk: {
    color: colors.main
  },
  holder: {
    borderColor: colors.borderInput,
    borderWidth: 2,
    paddingLeft: Platform.OS === 'ios' ? 10 : 0
  },
  text: {
    color: colors.textInput,
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 40,
    height: 40
  },
  picker: {
    color: colors.textInput,
    height: 40,
    paddingBottom: 5
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  modalContent: {
    backgroundColor: 'white'
  },
  error: {
    color: colors.error,
    minHeight: 30
  }
})
