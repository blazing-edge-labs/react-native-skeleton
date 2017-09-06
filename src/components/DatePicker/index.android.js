import React, { Component } from 'react'
import { View, DatePickerAndroid, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'

import Label from 'components/Label'
import { hasError } from 'utils/validations'
import { formatDate } from 'utils/formatDate'
import styles from './styles'

// TODO: Check if bug has been fixed on Android when choosing a >2039 year

export class DatePicker extends Component {
  constructor (props) {
    super(props)

    this.showPicker = this.showPicker.bind(this)
  }

  async showPicker () {
    const { input } = this.props
    let options = Object.assign({}, { date: new Date(input.value), maxDate: moment().set('year', 2038).toDate(), mode: 'spinner' })

    const { action, year, month, day } = await DatePickerAndroid.open(options)
    if (action !== DatePickerAndroid.dismissedAction) {
      input.onChange(moment(`${year}-${month + 1}-${day}T12`, 'YYYYMMDDHH').format())
    }
  }

  render () {
    const { label, input, meta } = this.props

    const isError = hasError(meta)

    return (
      <View style={styles.wrap}>
        <Label error={isError}>
          {label}
        </Label>
        <TouchableOpacity
          onPress={this.showPicker}>
          <View style={styles.holder}>
            <Text style={styles.dateText} >
              {input.value ? formatDate(input.value) : 'Choose a date'}
            </Text>
            <Icon style={styles.icon} name='calendar' />
          </View>
        </TouchableOpacity>
        <Text style={styles.error}>
          {isError && meta.error}
        </Text>
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
  restriction: PropTypes.object
}

export default DatePicker
