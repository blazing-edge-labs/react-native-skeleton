import { StyleSheet } from 'react-native'

import { colors, sizes } from 'styles/variables'

export default StyleSheet.create({
  wrap: {
    flexDirection: 'row'
  },
  label: {
    color: colors.font,
    marginBottom: 5,
    fontSize: sizes.font,
    marginLeft: 10,
    flex: 1
  },
  outer: {
    height: 24,
    width: 24,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerSelected: {
    backgroundColor: 'black'
  },
  outerDisabled: {
    borderColor: colors.disabledDarker
  },
  outerSelectedDisabled: {
    backgroundColor: colors.disabledDarker
  },
  check: {
    fontSize: sizes.font,
    color: 'white'
  },
  checkDisabled: {
    color: colors.disabledLighter
  },
  labelDisabled: {
    color: colors.disabledDarker
  }
})
