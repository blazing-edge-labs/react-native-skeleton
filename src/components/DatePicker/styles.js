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
    color: 'black',
    fontSize: 16,
    height: 30
  },
  icon: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
    height: 20
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
