import * as types from '../actions/actionTypes'

const translation = (state = {}, action) => {
  switch (action.type) {
    case types.DETECH_LANGUAGE:
      return {
        ...state,
        deviceLocale: action.language,
        isRTL: action.isRTL
      }
    case types.SWITCH_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.language,
        isRTL: action.isRTL
      }
    case types.FETCH_TRANSLATION:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_TRANSLATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        languages: action.languages
      }
    case types.FETCH_TRANSLATION_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: action.message
      }
    default:
      return state
  }
}

export default translation
