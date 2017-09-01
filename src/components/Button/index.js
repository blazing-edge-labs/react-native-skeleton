import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import styles from './styles'

class Button extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { children, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrap}>
          <Text style={styles.text}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Button
