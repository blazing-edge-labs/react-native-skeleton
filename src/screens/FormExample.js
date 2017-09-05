import React, { Component } from 'react'
import { Text } from 'react-native'
import { Field, reduxForm, Form, SubmissionError } from 'redux-form'
import { connect } from 'react-redux'

import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Label from '../components/Label'
import ScrollView from '../components/ScrollView'
import TextInput from '../components/TextInput'
import Radio from '../components/Radio'
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
      <ScrollView style={{ flex: 1 }}>
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
        <Label>Choose your age</Label>
        <Field
          name='testRadio'
          label='Value 1'
          val="1"
          component={Radio}
        />
        <Field
          name='testRadio'
          label='A very very very very long long long long long label ed more text :('
          val="2"
          component={Radio}
        />
        <Label>Checkboxeees</Label>
        <Field
          name='check1'
          label='You sure'
          component={Checkbox}
        />
        <Field
          name='check2'
          label='Really'
          component={Checkbox}
        />
        <Button
          onPress={handleSubmit(this.formSubmit)}
        >
          Submit
        </Button>
      </ScrollView>
    )
  }
}

export default connect(state => ({
  initialValues: {
    testInput2: 'One very very very very very very long long long long long long text',
    testRadio: "2",
    check2: true
  }
}))(reduxForm({
  form: 'example'
})(FormExample))
