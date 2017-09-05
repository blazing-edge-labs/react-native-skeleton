import { StyleSheet } from 'react-native'
import { colors } from '../../styles/variables'

export default StyleSheet.create({
  label: {
    color: colors.font,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold'
  },
  error: {
    color: colors.error
  }
})