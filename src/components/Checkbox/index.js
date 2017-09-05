import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

class Checkbox extends Component {
  constructor (props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    const { input } = this.props

    input.onChange(!input.value)
  }

  isChecked () {
    const { input, val } = this.props

    return input.value;
  }

  render () {
    const { label } = this.props
    const checked = this.isChecked()

    return (
      <TouchableOpacity
        onPress={this.handlePress}
      >
        <View style={styles.wrap}>
          <View style={[styles.outer, checked && styles.outerSelected]}>
            <Text>{checked && <Icon style={styles.checked} name='check' />}</Text>
          </View>
          <Text style={styles.label}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  circle: PropTypes.bool,
  onClick: PropTypes.func
}

export default Checkbox
