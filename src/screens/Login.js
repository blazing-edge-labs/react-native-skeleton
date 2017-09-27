import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { authenticate, passwordless, logout } from 'actions/auth'
import Button from 'components/Button'
import TextInput from 'components/TextInput'
import { required } from 'utils/validator'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.handleWithPassword = this.handleWithPassword.bind(this)
    this.handlePasswordless = this.handlePasswordless.bind(this)
    this.handleLogout = this.handleLogout.bind(this)

    this.state = {
      message: null
    }
  }

  handleWithPassword (values) {
    const { dispatch } = this.props

    dispatch(authenticate(values))
  }

  handlePasswordless (values) {
    const { dispatch } = this.props

    const data = {
      email: values.email
    }

    dispatch(passwordless(data))
    .then(() => this.setState({ message: 'Email sent' }))
  }

  handleLogout () {
    const { dispatch } = this.props

    dispatch(logout())
  }

  renderLogin () {
    const { handleSubmit } = this.props

    return (
      <View style={{ flex: 1, margin: 20, marginBottom: 0 }}>
        <Field
          name="email"
          validate={[required]}
          label="Email"
          type="email"
          component={TextInput}
        />
        <Button
          onPress={handleSubmit(this.handlePasswordless)}
        >
          Passwordless Login
        </Button>
        <Field
          name="password"
          label="Password"
          component={TextInput}
          secureTextEntry={true}
        />
        <Button
          onPress={handleSubmit(this.handleWithPassword)}
        >
          Login with password
        </Button>
        <Text>{this.state.message}</Text>
      </View>
    )
  }

  renderLogout () {
    return (
      <View style={{ flex: 1, margin: 20, marginBottom: 0 }}>
        <Text>You are currently logged in!</Text>
        <Button onPress={this.handleLogout}>
          Logout
        </Button>
      </View>
    )
  }

  render () {
    const { handleSubmit, authed } = this.props

    return authed ? this.renderLogout() : this.renderLogin()
  }
}

export default connect(state => ({
  authed: state.auth.authed
}))(reduxForm({
  form: 'Login'
})(LoginForm))