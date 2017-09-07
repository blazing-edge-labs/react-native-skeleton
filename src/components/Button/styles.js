import { StyleSheet } from 'react-native'
import { colors, sizes } from 'styles/variables'

// TODO: Disabled

export default StyleSheet.create({
  wrap: {
    width: 150,
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
  }
})
