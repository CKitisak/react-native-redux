import * as types from './actionTypes'
import I18n from '../i18n'

export const detectLanguage = () => ({
  type: types.DETECH_LANGUAGE,
  language: I18n.locale.substr(0, 2)
})

export const switchLanguage = (language) => (dispatch, getState) => {
  let currentLanguage = getState().translation.currentLanguage
  if (currentLanguage !== language) {
    I18n.locale = language
    dispatch({
      type: types.SWITCH_LANGUAGE,
      language
    })
  }
}

export const fetchLanguages = () => (dispatch) => {
  dispatch({ type: types.FETCH_LANGUAGES })
  return fetch('http://192.168.1.2:3000/languages')
          .then(response => response.json())
          .then(json => {
            I18n.translations = json
            dispatch({
              type: types.FETCH_LANGUAGES_DONE,
              languages: json
            })
          })
}
