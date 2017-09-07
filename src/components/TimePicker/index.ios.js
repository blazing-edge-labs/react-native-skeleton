import React, { Component } from 'react'
import { View, DatePickerIOS, TouchableOpacity, Modal, TouchableWithoutFeedback, Text } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'

import Label from 'components/Label'
import InlineError from 'components/InlineError'
import { hasError } from 'utils/validations'
import styles from './styles'

// TODO: Add time icon

export class TimePicker extends Component {
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

  onDateChange (date) {
    const { input } = this.props
    this.setState({ date: new Date(date) })
    input.onChange(moment(date).format('LT'))
  }

  render () {
    const { label, input, meta } = this.props

    const isError = hasError(meta)

    return (
      <View style={styles.wrap}>
        <Modal
          transparent
          visible={this.state.modal}
          animationType={'fade'}
        >
          <TouchableWithoutFeedback onPress={() => this.setModal(false)}>
            <View style={styles.modal}>
              <View style={styles.modalContent}>
                <DatePickerIOS
                  mode={'time'}
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
          onPress={() => this.setModal(true)}
        >
          <View style={styles.holder}>
            <Text style={styles.dateText}>
              {input.value || 'Choose a time'}
            </Text>
          </View>
        </TouchableOpacity>
        <InlineError meta={meta} />
      </View>
    )
  }
}

TimePicker.defaultProps = {
  input: {
    value: new Date()
  }
}

TimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  required: PropTypes.bool,
  restriction: PropTypes.object
}

export default TimePicker
