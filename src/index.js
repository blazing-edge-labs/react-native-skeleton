import React, { Component } from 'react'
import { Linking, Platform, AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import codePush from 'react-native-code-push'

import { passwordlessConfirm, reauthenticate } from 'actions/auth'
import store from './reducers'
import Login from './screens/Login'

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class App extends Component {
  componentDidMount() {
    AsyncStorage.getItem('token')
    .then(token => {
      if (token) store.dispatch(reauthenticate())
    })

    if (Platform.OS === 'android') {
      Linking.getInitialURL()
      .then(url => {
        this.handleOpenURL({ url })
      })
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  async handleOpenURL(event) {
    const prefix = 'skeleton://ecp/'
    const { url } = event
    if (url) {
      const path = url.substring(prefix.length)
      const values = path.split('/')

      if (values[0] === 'tokenRemote') {
        const tokenDirect = await AsyncStorage.getItem('tokenDirect')
        const data = {
          tokenDirect,
          tokenRemote: values[1]
        }
        store.dispatch(passwordlessConfirm(data))
      } else {
        console.log('no deep link matched')
      }
    }
  }

  render () {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}

export default codePush(codePushOptions)(App)
