import { StyleSheet } from 'react-native'

import { colors, sizes } from 'styles/variables'

export default StyleSheet.create({
  error: {
    color: colors.error,
    fontSize: sizes.smallFont,
    lineHeight: sizes.smallFont * 1.5,
    minHeight: 30
  }
})
