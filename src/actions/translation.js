import * as types from './actionTypes'
import I18n from '../i18n'

// import { I18nManager } from 'react-native'

// const isRTLLanguage = (language) => {
//   const RTLLanguages = [
//     'ar', // Arabic
//     'dv', // Divehi
//     'fa', // Persian (Farsi)
//     'ha', // Hausa
//     'he', // Hebrew
//     'iw', // Hebrew (old code)
//     'ji', // Yiddish (old code)
//     'ps', // Pashto, Pushto
//     'ur', // Urdu
//     'yi', // Yiddish
//   ]
//   if (RTLLanguages.indexOf(language) !== -1) {
//     return true
//   } else {
//     return false
//   }
// }

export const detectLanguage = () => ({
  type: types.DETECH_LANGUAGE,
  language: I18n.locale.substr(0, 2)
})

export const switchLanguage = (language) => (dispatch, getState) => {
  let currentLanguage = getState().translation.currentLanguage
  if (currentLanguage !== language) {
    // // set display layout
    // I18nManager.forceRTL(isRTLLanguage(language))
    // update display language
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
          .then(response => {
            // solve chrome debugging hangs sometimes
            setTimeout(() => null, 0)
            return response.json()
          })
          .then(json => {
            I18n.translations = json
            dispatch({
              type: types.FETCH_LANGUAGES_DONE,
              languages: json
            })
          })
}
