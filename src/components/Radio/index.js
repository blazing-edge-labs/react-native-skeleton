import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

// TODO: Talk with Andro, extra pixels at the top of circle

class Radio extends Component {
  constructor (props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    const { input, meta, val } = this.props
    
    input.onChange(val)
  }

  isSelected () {
    const { input, val } = this.props

    return input.value === val;
  }

  render () {
    const { label } = this.props
    const selected = this.isSelected()

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.wrap}>
          <View style={[styles.outer, selected && styles.outerSelected]}>
            {selected && <View style={styles.inner} />}
          </View>
          <Text style={styles.label}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  val: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
}

export default Radio
