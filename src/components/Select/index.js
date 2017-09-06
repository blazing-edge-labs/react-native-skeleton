import React from 'react'
import { Platform } from 'react-native'

import SelectAndroid from './index.android.js'
import SelectIOS from './index.ios.js'

const Select = (props) => {
  if (Platform.OS === 'ios') return <SelectIOS {...props} />
  return <SelectAndroid {...props} />
}

export default Select
