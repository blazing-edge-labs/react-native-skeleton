import React, { Component } from 'react'
import { View, TimePickerAndroid, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'

import Label from 'components/Label'
import InlineError from 'components/InlineError'
import { hasError } from 'utils/validator'
import styles from './styles'

export class TimePicker extends Component {
  constructor (props) {
    super(props)

    this.showPicker = this.showPicker.bind(this)
  }

  async showPicker () {
    const { input, restriction } = this.props
    let options = Object.assign({}, restriction, { is24Hour: false })

    const { action, minute, hour } = await TimePickerAndroid.open(options)
    if (action !== TimePickerAndroid.dismissedAction) {
      input.onChange(moment(`${hour}-${minute}`, 'LT').format('LT'))
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
          onPress={this.showPicker}
        >
          <View style={styles.holder}>
            <Text style={styles.dateText} >
              {input.value || 'Choose a time'}
            </Text>
            <Icon style={styles.icon} name='clock-o' />
          </View>
        </TouchableOpacity>
        <InlineError meta={meta} />
      </View>
    )
  }
}

TimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  restriction: PropTypes.object
}

export default TimePicker
