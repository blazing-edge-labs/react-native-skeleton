import { StyleSheet } from 'react-native'
import { colors } from '../../styles/variables'

export default StyleSheet.create({
  wrap: {
    flex: 1,
    marginBottom: 20
  },
  input: {
    minHeight: 40,
    fontSize: 16,
    margin: 0,
    padding: 10,
    color: '#000000'
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#000000'
  },
  error: {
    color: colors.error,
    minHeight: 30
  },
  errorWrapper: {
    borderColor: colors.error
  },
  multiline: {
    textAlignVertical: 'top'
  }
})
