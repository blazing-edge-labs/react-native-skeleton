import React, { Component } from 'react'
import { View, DatePickerIOS, TouchableOpacity, Modal, TouchableWithoutFeedback, Text } from 'react-native'
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
    this.onDateChange = this.onDateChange.bind(this)
    this.setModal = this.setModal.bind(this)

    this.state = {
      date: new Date(),
      modal: false
    }
  }

  setModal (visibility) {
    this.setState({ modal: visibility })
  }

  componentWillMount () {
    if (this.props.input.value) this.onDateChange(new Date(this.props.input.value))
  }

  onDateChange (date) {
    const { input } = this.props
    this.setState({ date })
    input.onChange(moment(new Date(date), 'YYYY-MM-DD').format('YYYY-MM-DD'))
  }

  render () {
    const { label, input, meta, type, disabled } = this.props

    const isError = hasError(meta)

    return (
      <View style={styles.wrap}>
        <Modal
          transparent
          visible={this.state.modal}
          animationType={'fade'}
        >
          <TouchableWithoutFeedback
            onPress={() => this.setModal(false)}
            disabled={disabled}>
            <View style={styles.modal}>
              <View style={styles.modalContent}>
                <DatePickerIOS
                  mode={type}
                  date={this.state.date}
                  onDateChange={this.onDateChange}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Label error={isError}>
          {label}
        </Label>
        <TouchableOpacity
          onPress={() => this.setModal(true)}>
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

DatePicker.defaultProps = {
  input: {
    value: new Date()
  },
  type: 'date'
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
