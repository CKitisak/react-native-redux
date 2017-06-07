export const GET_STYLE_SHEET = 'GET_STYLE_SHEET'
export const GET_STYLE_SHEET_SUCCESS = 'GET_STYLE_SHEET_SUCCESS'
export const GET_STYLE_SHEET_FAIL = 'GET_STYLE_SHEET_FAIL'

export const getStyleSheet = () => ({
  type: GET_STYLE_SHEET
})

export const getStyleSheetSuccess = (json) => ({
  type: GET_STYLE_SHEET_SUCCESS,
  styles: json
})

export const getStyleSheetFail = () => ({
  type: GET_STYLE_SHEET_FAIL
})

export const fetchStyleSheet = () => dispatch => {
  dispatch(getStyleSheet())
  return fetch('http://192.168.1.104:3000/styles.json')
    .then(response => response.json())
    .then(json => dispatch(getStyleSheetSuccess(json)))
}
