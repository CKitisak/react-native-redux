import { combineReducers } from 'redux'

import nav from './navigation'
import auth from './auth'

const AppReducers = combineReducers({
  nav,
  auth
})

export default AppReducers