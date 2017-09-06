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
    fontSize: 16,
    paddingLeft: 10
  },
  outer: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  outerSelected: {
    backgroundColor: 'black'
  }
})
