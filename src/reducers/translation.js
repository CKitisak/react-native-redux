import * as types from '../actions/actionTypes'

const translation = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_LANGUAGES:
      return {
        ...state,
        isLoading: true
      }
    case types.FETCH_LANGUAGES_DONE:
      return {
        ...state,
        isLoading: false,
        languages: action.languages
      }
    case types.SWITCH_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.language,
        isRTL: action.isRTL
      }
    case types.DETECH_LANGUAGE:
      return {
        ...state,
        deviceLocale: action.language,
        currentLanguage: state.currentLanguage ? state.currentLanguage : action.language,
        isRTL: action.isRTL
      }
    default:
      return state
  }
}

export default translation
