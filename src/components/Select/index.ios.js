import React, { Component } from 'react'
import { View, Picker, Modal, TouchableWithoutFeedback, Text } from 'react-native'
import PropTypes from 'prop-types'

import Label from 'components/Label'
import InlineError from 'components/InlineError'
import { hasError } from 'utils/validations'
import styles from './styles'

// TODO: Disabled
// TODO: Add dropdown arrow on the right side

export class Select extends Component {
  constructor (props) {
    super(props)
    this.setModal = this.setModal.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.setInitValue = this.setInitValue.bind(this)

    this.state = {
      modal: false,
      value: props.input.value || ''
    }

    this.setInitValue(props)
  }

  componentWillReceiveProps (nextProps) {
    this.setInitValue(nextProps)
  }

  setInitValue ({ input, options }) {
    if (input.value === '' && options.length > 0 && options[0] && options[0].value !== '') {
      input.onChange(options[0].value)
    }
  }

  renderItems () {
    const { options } = this.props

    return options.map((item, index) => (
      <Picker.Item key={index} label={item.label} value={item.value} />
    ))
  }

  setModal (visibility) {
    this.setState({ modal: visibility })
  }

  handleClick (value) {
    const { input, onClick } = this.props

    input.onChange(value)

    typeof onClick === 'function' && onClick(value)
  }

  render () {
    const { label, input, meta, options } = this.props

    const isError = hasError(meta)

    const findValue = item => item.value === input.value
    const val = options.find(findValue)
    const theLabel = val ? val.label : 'Choose your selection'

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
                { options && <Picker
                  selectedValue={input.value}
                  onValueChange={(value) => this.handleClick(value)}
                  >
                    {this.renderItems(options)}
                  </Picker>
                }
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Label>{label}</Label>
        <View style={styles.holder}>
          <Text style={styles.text} onPress={() => this.setModal(true)}>
            {theLabel}
          </Text>
        </View>
        <InlineError meta={meta} />
      </View>
    )
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
}

export default Select
