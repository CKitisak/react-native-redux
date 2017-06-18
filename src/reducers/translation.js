import * as types from '../actions/actionTypes'

const initialState = {
  isRTL: false,
  isFetching: false,
  isError: false,
  errorMessage: null,
  language: 'en',
  languages: {}
}

const translation = (state = initialState, action) => {
  switch (action.type) {
    case types.DETECH_LANGUAGE:
      return {
        ...state,
        deviceLanguage: action.language,
        isRTL:  action.isRTL
      }
    case types.SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.language,
        isUpdating: true
      }
    case types.SWITCH_LANGUAGE_SUCCESS:
      return {
        ...state,
        isRTL: action.isRTL,
        isUpdating: false
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
        errorMessage: null,
        languages: action.languages
      }
    case types.FETCH_TRANSLATION_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.message
      }
    default:
      return state
  }
}

export default translation
