import React from 'react' // eslint-disable-line
import { Provider } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

import store from './reducers'

registerScreens(store, Provider)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'react-native-skeleton.screen',
    title: 'Screen'
  }
})
