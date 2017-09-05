import React, { Component } from 'react'
import { View, Picker, Text } from 'react-native'
import PropTypes from 'prop-types'

import { hasError } from '../../utils/validations'
import Label from '../Label'
import styles from './styles'

class Select extends Component {
  constructor (props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)

    this.state = {
      value: props.input.value || ''
    }
  }

  renderItems () {
    const { options } = this.props

    return options.map((item, index) => (
      <Picker.Item key={index} label={item.label} value={item.value} />
    ))
  }

  handlePress (value) {
    const { input, onPress } = this.props

    this.setState({ value })

    input.onChange(value)

    typeof onPress === 'function' && onPress(value)
  }

  render () {
    const { label, meta, options } = this.props
    const isError = hasError(meta)

    return (
      <View style={styles.wrap}>
        <Label>{label}</Label>
        <View style={styles.holder}>
          { options && <Picker
            style={styles.picker}
            selectedValue={this.state.value}
            onValueChange={this.handlePress}
            >
              {this.renderItems(options)}
            </Picker>
          }
          <View style={styles.bottomBorder} />
        </View>
        <Text style={styles.error}>
          {isError && meta.error}
        </Text>
      </View>
    )
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
}

export default Select
