import React from 'react'
import { ScrollView, Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function ({ children, style, contentContainerStyle, extraScrollHeight }) {
  if (Platform.OS === 'ios') {
    return (
      <ScrollView
        style={style}
        contentContainerStyle={contentContainerStyle}
      >
        {children}
      </ScrollView>
    )
  }
  return (
    <KeyboardAwareScrollView
      style={style}
      contentContainerStyle={contentContainerStyle}
      extraScrollHeight={extraScrollHeight || 0}
    >
      {children}
    </KeyboardAwareScrollView>
  )
}
