import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from 'constants/actions'

const initialState = {
  authed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { authed: true }
    case LOGOUT_SUCCESS:
      return { authed: false }
    default: {
      return state
    }
  }
}