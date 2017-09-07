import React, { Component } from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import DatePicker from 'components/DatePicker'
import InlineError from 'components/InlineError'
import Label from 'components/Label'
import ScrollView from 'components/ScrollView'
import Select from 'components/Select'
import TextInput from 'components/TextInput'
import TimePicker from 'components/TimePicker'
import Radio from 'components/Radio'
import { required, number } from 'utils/validations'

class FormExample extends Component {
  formSubmit (values) {
    console.log(values)
  }

  render () {
    const { handleSubmit } = this.props

    const options = [
      { value: '', label: 'Valueless label' },
      { value: '1', label: 'Longer label for one' },
      { value: '2', label: 'Two' },
      { value: '34', label: 'Three' },
      { value: '35', label: 'Hhhh' },
      { value: '66', label: 'Hhhh' },
      { value: '5', label: 'Hhhh' },
      { value: '32', label: 'Hhhh' },
      { value: '31', label: 'Hhhh' },
      { value: '320', label: 'Hhhh' },
      { value: '51', label: 'Hhhh' },
      { value: '322', label: 'Hhhh' },
      { value: '321', label: 'Hhhh' },
      { value: '310', label: 'Hhhh' }
    ]

    return (
      <ScrollView style={{ flex: 1, margin: 10, marginBottom: 0 }}>
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
        <Field
          name='testInputDisabled'
          label='Disabled input'
          disabled
          component={TextInput}
        />
        <Field
          name='testInput2Disabled'
          label='Text Area InputDisabled'
          disabled
          component={TextInput}
          multiline
        />
        <Label>Choose your age</Label>
        <Field
          name='testRadio'
          label='Value 1'
          val='1'
          component={Radio}
        />
        <Field
          name='testRadio'
          label='A very very very very long long long long long label ed more text :('
          val='2'
          component={Radio}
        />
        <Field
          name='testRadio'
          label='A very very very very long long long long long label ed more text :('
          val='3'
          component={Radio}
        />
        <Field
          name='testRadio'
          label='Disabled'
          val='4'
          disabled
          component={Radio}
        />
        <Field
          name='testRadio'
          label='Disabled active'
          val='5'
          disabled
          component={Radio}
        />
        <InlineError />
        <Label>Checkboxeees</Label>
        <Field
          name='check1'
          label='You sure'
          component={Checkbox}
        />
        <Field
          name='check2'
          label='ReallyReally ReallyReallyReallyReally Rly Rly Rly ReallyReallyReally Really ReallyReally'
          component={Checkbox}
        />
        <Field
          name='check3'
          label='Disabled'
          disabled
          component={Checkbox}
        />
        <Field
          name='check4'
          label='Disabled checked'
          disabled
          component={Checkbox}
        />
        <InlineError />
        <Field name='selectedValue'
          options={options}
          component={Select}
          label='Select'
        />
        <Field name='selectedValue'
          options={options}
          component={Select}
          mode='dropdown'
          label='Select - Android specific dropdown'
        />
        <Field name='datePickerValue'
          component={DatePicker}
          label={'The Date picker'}
        />
        <Field name='timePickerValue'
          component={TimePicker}
          label={'The Time picker'}
        />
        <View style={{ flexDirection: 'row' }}>
          <Button
            onPress={handleSubmit(this.formSubmit)}
            disabled
          >
            Disabled?
          </Button>
          <Button
            onPress={handleSubmit(this.formSubmit)}
          >
            Submit
          </Button>
        </View>
      </ScrollView>
    )
  }
}

export default connect(state => ({
  initialValues: {
    testInput2: 'One very very very very very very long long long long long long text',
    testInputDisabled: 'Try to change me',
    testRadio: '5',
    check2: true,
    check4: true
  }
}))(reduxForm({
  form: 'example'
})(FormExample))
