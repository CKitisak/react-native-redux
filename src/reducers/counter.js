import * as types from '../actions/actionTypes'

let initialState = 0

const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    case types.RESET:
      return initialState
    default:
      return state
  }
}

export default counter