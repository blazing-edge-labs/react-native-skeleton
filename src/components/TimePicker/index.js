import React from 'react'
import { Platform } from 'react-native'

import TimePickerAndroid from './index.android.js'
import TimePickerIOS from './index.ios.js'

const TimePicker = (props) => {
  if (Platform.OS === 'ios') return <TimePickerIOS {...props} />
  return <TimePickerAndroid {...props} />
}

export default TimePicker
