import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import appStyle from './appStyle'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  appStyle
})

export default todoApp
