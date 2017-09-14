import React, { Component } from 'react'
import { View, DatePickerAndroid, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'

import Label from 'components/Label'
import InlineError from 'components/InlineError'
import { hasError } from 'utils/validator'
import styles from './styles'

export class DatePicker extends Component {
  constructor (props) {
    super(props)

    this.showPicker = this.showPicker.bind(this)
  }

  async showPicker () {
    const { input } = this.props
    let options = Object.assign({}, { date: new Date(input.value), mode: 'spinner' })

    const { action, year, month, day } = await DatePickerAndroid.open(options)
    if (action !== DatePickerAndroid.dismissedAction) {
      input.onChange(moment(`${year}-${month + 1}-${day}`, 'YYYY-MM-DD').format('YYYY-MM-DD'))
    }
  }

  render () {
    const { label, input, meta, disabled } = this.props
    const isError = hasError(meta)

    return (
      <View style={styles.wrap}>
        <Label error={isError}>
          {label}
        </Label>
        <TouchableOpacity
          onPress={this.showPicker}
          disabled={disabled}
        >
          <View style={styles.holder}>
            <Text style={styles.dateText} >
              {input.value ? input.value : 'Choose a date'}
            </Text>
            <Icon style={styles.icon} name='calendar' />
          </View>
        </TouchableOpacity>
        <InlineError meta={meta} />
      </View>
    )
  }
}

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  restriction: PropTypes.object,
  disabled: PropTypes.bool
}

export default DatePicker
