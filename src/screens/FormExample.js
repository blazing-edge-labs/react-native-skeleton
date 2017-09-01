import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Field, reduxForm, Form, SubmissionError } from 'redux-form'

import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { required, number } from '../utils/validations'

class FormExample extends Component {
  constructor (props) {
    super(props)
  }

  formSubmit (values) {
    throw new SubmissionError('test')
  }

  render () {
    const { handleSubmit, error } = this.props

    return (
      <View>
        <Field
          name='testInput'
          label='Number input'
          validate={[required, number]}
          component={TextInput}
        />
        <Field
          name='testInput2'
          label='Text Area Input'
          component={TextInput}
          multiline
        />
        <Button
          onPress={handleSubmit(this.formSubmit)}
        >
          Submit
        </Button>
      </View>
    )
  }
}

export default reduxForm({
  form: 'example'
})(FormExample)
