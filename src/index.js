/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import codePush from 'react-native-code-push'

import store from './reducers'
import FormExample from './screens/FormExample'

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <FormExample />
      </Provider>
    )
  }
}

export default codePush(codePushOptions)(App)
