import React, { Component } from 'react'
import { Text } from 'react-native'
import { Field, reduxForm, Form, SubmissionError } from 'redux-form'
import { connect } from 'react-redux'

import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Label from '../components/Label'
import ScrollView from '../components/ScrollView'
import Select from '../components/Select'
import TextInput from '../components/TextInput'
import Radio from '../components/Radio'
import { required, number } from '../utils/validations'

class FormExample extends Component {
  constructor (props) {
    super(props)
  }

  formSubmit (values) {
    console.log(values)
  }

  render () {
    const { handleSubmit, error } = this.props

    const options = [
      { value: '', label: 'Valueless label' },
      { value: '1', label: 'Longer label for one' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' }
    ]

    return (
      <ScrollView style={{ flex: 1, margin: 10 }}>
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
        <Field name='selectedValue'
          options={options}
          component={Select}
          label={'Here goes the label'}
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
