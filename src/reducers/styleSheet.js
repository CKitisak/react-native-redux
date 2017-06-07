import {
  GET_STYLE_SHEET,
  GET_STYLE_SHEET_SUCCESS,
  GET_STYLE_SHEET_FAIL
} from '../actions/styleSheet'

const initialState = {
  isFetching: false,
  didFail: false,
  styles: {}
}

const styleSheet = (state = initialState, action) => {
  switch (action.type) {
    case GET_STYLE_SHEET:
      return {
        ...state,
        isFetching: true,
        didFail: false
      }
    case GET_STYLE_SHEET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didFail: false,
        styles: action.styles
      }
    case GET_STYLE_SHEET_FAIL:
      return {
        ...state,
        didFail: true
      }
    default:
      return state
  }
}

export default styleSheet
