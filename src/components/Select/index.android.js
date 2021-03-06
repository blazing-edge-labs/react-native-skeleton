import React, { Component } from 'react'
import { View, Picker } from 'react-native'
import PropTypes from 'prop-types'

import Label from 'components/Label'
import InlineError from 'components/InlineError'
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
    const { label, meta, options, mode, disabled } = this.props

    return (
      <View style={[styles.wrap, disabled && styles.disabled]}>
        <Label>{label}</Label>
        <View
          pointerEvents={disabled ? 'none' : 'auto'}
          style={styles.holder}>
          { options && <Picker
            style={styles.picker}
            selectedValue={this.state.value}
            onValueChange={this.handlePress}
            mode={mode}
            >
              {this.renderItems(options)}
            </Picker>
          }
          <View />
        </View>
        <InlineError meta={meta} />
      </View>
    )
  }
}

Select.defaultProps = {
  mode: 'dialog'
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  mode: PropTypes.string,
  disabled: PropTypes.bool
}

export default Select
