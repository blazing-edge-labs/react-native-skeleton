import React from 'react'
import { Platform } from 'react-native'

import DatePickerAndroid from './index.android.js'
import DatePickerIOS from './index.ios.js'

const DatePicker = (props) => {
  if (Platform.OS === 'ios') return <DatePickerIOS {...props} />
  return <DatePickerAndroid {...props} />
}

export default DatePicker
