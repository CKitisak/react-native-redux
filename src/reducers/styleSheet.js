import {
  GET_STYLE_SHEET,
  GET_STYLE_SHEET_SUCCESS,
  INVALIDATE_STYLE_SHEET
} from '../actions/styleSheet'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  styles: {}
}

const styleSheet = (state = initialState, action) => {
  switch (action.type) {
    case GET_STYLE_SHEET:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case GET_STYLE_SHEET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        styles: action.styles
      }
    case INVALIDATE_STYLE_SHEET:
      return {
        ...state,
        didInvalidate: true
      }
    default:
      return state
  }
}

export default styleSheet
