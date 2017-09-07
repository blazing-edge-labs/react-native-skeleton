import { StyleSheet, Platform } from 'react-native'

import { colors, sizes } from 'styles/variables'

export default StyleSheet.create({
  wrap: {
    flex: 1
  },
  holder: {
    borderBottomColor: colors.borderInput,
    borderBottomWidth: 1
  },
  text: {
    color: colors.textInput,
    fontSize: sizes.font,
    textAlign: 'left',
    lineHeight: 40,
    height: 40,
  },
  picker: {
    color: colors.textInput,
    height: 40,
    paddingBottom: 5,
    marginLeft: -7
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  modalContent: {
    backgroundColor: 'white'
  }
})
