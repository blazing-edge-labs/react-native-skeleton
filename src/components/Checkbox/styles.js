import { StyleSheet } from 'react-native'
import { colors } from '../../styles/variables'

export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    marginBottom: 5
  },
  label: {
    color: colors.font,
    marginBottom: 5,
    fontSize: 16
  },
  outer: {
    height: 24,
    width: 24,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerSelected: {
    backgroundColor: 'black'
  },
  label: {
    flex: 1,
    lineHeight: 24,
    paddingLeft: 10,
    color: colors.font,
    fontSize: 16
  },
  checked: {
    fontSize: 16,
    color: 'white',
    bottom: 2,
    right: 1
  }
})