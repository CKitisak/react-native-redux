import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import styleSheet from './styleSheet'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  styleSheet
})

export default todoApp