import { StyleSheet } from 'react-native'
import { sizes } from 'styles/variables'

export default StyleSheet.create({
  wrap: {
    flex: 1
  },
  holder: {
    borderBottomColor: 'black',
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
  },
  icon: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
    height: 20
  }
})
