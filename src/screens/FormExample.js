import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import Button from '../components/Button'

class FormExample extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View>
        <Text>hhh</Text>
        <Button>
          The h
        </Button>
      </View>
    )
  }
}

export default reduxForm({
  form: 'example'
})(FormExample)
