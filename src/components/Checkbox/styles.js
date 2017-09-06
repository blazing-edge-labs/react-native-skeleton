import { StyleSheet } from 'react-native'

import { colors } from 'styles/variables'

export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    marginBottom: 5
  },
  label: {
    color: colors.font,
    marginBottom: 5,
    fontSize: 16,
    marginLeft: 10,
    flex: 1
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
  checked: {
    fontSize: 16,
    color: 'white'
  }
})
