/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './reducers'
import FormExample from './screens/FormExample'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <FormExample />
      </Provider>
    )
  }
}
