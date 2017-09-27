import { AsyncStorage } from 'react-native'
import api from 'utils/api'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from 'constants/actions'

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})

export const authenticate = values =>
  dispatch =>
    api.post('auth', values)
    .then(async data => {
      await AsyncStorage.setItem('token', `Bearer ${data.token}`)
      return dispatch(loginSuccess())
    })
    .catch(error =>
      console.log(error, 'auth error')
    )

export const passwordless = values =>
  dispatch =>
    api.post('passwordless/attempt', values)
    .then(async data =>
      await AsyncStorage.setItem('tokenDirect', data.tokenDirect)
    )

export const passwordlessConfirm = values =>
  dispatch =>
    api.post('passwordless/confirm', values)
    .then(async data => {
      await AsyncStorage.setItem('token', `Bearer ${data.token}`)
      return dispatch(loginSuccess())
    })

export const reauthenticate = () =>
  dispatch =>
    api.get('self')
    .then(() =>
      dispatch(loginSuccess())
    )

export const logout = () =>
  dispatch => {
    AsyncStorage.removeItem('token')
    return dispatch(logoutSuccess())
  }