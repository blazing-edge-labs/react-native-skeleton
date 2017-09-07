import { StyleSheet } from 'react-native'
import { colors, sizes } from 'styles/variables'

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
    fontSize: sizes.font,
    color: 'black',
    height: 30
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
