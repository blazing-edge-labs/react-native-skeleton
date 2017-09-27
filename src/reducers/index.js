import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import auth from './auth'

const reducers = combineReducers({
  form: formReducer,
  auth
})

const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
