export const GET_STYLE_SHEET = 'GET_STYLE_SHEET'
export const GET_STYLE_SHEET_SUCCESS = 'GET_STYLE_SHEET_SUCCESS'
export const INVALIDATE_STYLE_SHEET = 'INVALIDATE_STYLE_SHEET'

export const getStyleSheet = () => ({
  type: GET_STYLE_SHEET
})

export const getStyleSheetSuccess = (json) => ({
  type: GET_STYLE_SHEET_SUCCESS,
  styles: json
})

export const invalidateSheetSuccess = () => ({
  type: INVALIDATE_STYLE_SHEET
})

const isEmptyStyleSheet = (obj) => {
  for (var x in obj) { return false }
  return true
}

const shouldFetchStyleSheet = (state, reddit) => {
  const { styleSheet } = state
  if (!styleSheet || isEmptyStyleSheet(styleSheet.styles)) {
    return true
  }
  if (styleSheet.isFetching) {
    return false
  }
  return styleSheet.didInvalidate
}

const fetchStyleSheet = () => (dispatch) => {
  dispatch(getStyleSheet())
  return fetch('http://192.168.1.2:3000/styles.json')
    .then(response => response.json())
    .then(json => dispatch(getStyleSheetSuccess(json)))
}

export const fetchStyleSheetIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchStyleSheet(getState())) {
    return dispatch(fetchStyleSheet())
  }
}
