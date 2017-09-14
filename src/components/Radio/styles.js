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
    paddingLeft: 10,
    alignItems: 'center'
  },
  outer: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
    marginTop: 1
  },
  inner: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  outerSelected: {
    backgroundColor: 'black',
    borderWidth: 0
  },
  outerDisabled: {
    borderColor: colors.disabledDarker
  },
  outerSelectedDisabled: {
    backgroundColor: colors.disabledDarker
  },
  labelDisabled: {
    color: colors.disabledDarker
  }
})
