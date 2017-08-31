import React, { Component } from 'react'
import { Text } from 'react-native'

class Button extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { children } = this.props
    return (
      <Text>
        {children}
      </Text>
    )
  }
}

export default Button
