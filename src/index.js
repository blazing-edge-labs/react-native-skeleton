import React, { Component } from 'react'
import { Linking } from 'react-native'
import { Provider } from 'react-redux'
import codePush from 'react-native-code-push'

import store from './reducers'
import FormExample from './screens/FormExample'

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class App extends Component {
  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL(event) {
    console.log(event.url);
    // Do something with this URL
  }

  render () {
    return (
      <Provider store={store}>
        <FormExample />
      </Provider>
    )
  }
}

export default codePush(codePushOptions)(App)
