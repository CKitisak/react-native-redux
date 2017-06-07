import { combineReducers } from 'redux'

import nav from './navigation'
import auth from './auth'
import backgroundImage from './backgroundImage'

const AppReducers = combineReducers({
  nav,
  auth,
  backgroundImage
})

export default AppReducers