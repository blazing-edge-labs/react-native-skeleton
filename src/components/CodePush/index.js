import React from 'react'
import codePush from 'react-native-code-push'

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class CodePush extends React.Component {
  render () {
    return null
  }
}

export default codePush(codePushOptions)(CodePush)
