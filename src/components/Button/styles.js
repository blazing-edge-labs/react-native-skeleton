import { StyleSheet } from 'react-native'
import { colors, sizes } from 'styles/variables'

export default StyleSheet.create({
  wrap: {
    minWidth: 150,
    marginBottom: 20,
    backgroundColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.font
  },
  text: {
    fontSize: sizes.font,
    color: colors.font,
    padding: 10,
    alignSelf: 'center'
  },
  wrapDisabled: {
    backgroundColor: '#F2F2F2',
    borderColor: '#DBDBDB'
  },
  textDisabled: {
    color: '#DBDBDB'
  },
  error: {
    borderColor: colors.error
  }
})
