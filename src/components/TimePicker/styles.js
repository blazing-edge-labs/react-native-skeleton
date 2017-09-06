import { StyleSheet } from 'react-native'
import { colors } from 'styles/variables'

export default StyleSheet.create({
  wrap: {
    flex: 1
  },
  holder: {
    borderBottomColor: colors.borderInput,
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  dateText: {
    fontSize: 16,
    color: 'black',
    height: 30
  },
  error: {
    color: colors.error,
    fontSize: 14,
    minHeight: 30
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  modalContent: {
    backgroundColor: 'white'
  }
})
