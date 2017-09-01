import { StyleSheet } from 'react-native'
import { colors } from '../../styles/variables'

export default StyleSheet.create({
  wrap: {
    width: 150,
    backgroundColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.font
  },
  text: {
    fontSize: 16,
    color: colors.font,
    padding: 10,
    alignSelf: 'center'
  }
})
