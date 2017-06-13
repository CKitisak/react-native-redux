import * as types from '../actions/actionTypes'

const translation = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_LANGUAGES:
      return {
        ...state,
        languages: action.languages
      }
    case types.SWITCH_LANGUAGE:
    case types.DETECH_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    default:
      return state
  }
}

export default translation
