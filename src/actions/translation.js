import * as types from './actionTypes'
import I18n from '../i18n'

import { I18nManager } from 'react-native'
import RNRestart from 'react-native-restart'

const isRTLLanguage = (language) => {
  const RTLLanguages = [
    'ar', // Arabic
    'dv', // Divehi
    'fa', // Persian (Farsi)
    'ha', // Hausa
    'he', // Hebrew
    'iw', // Hebrew (old code)
    'ji', // Yiddish (old code)
    'ps', // Pashto, Pushto
    'ur', // Urdu
    'yi', // Yiddish
  ]
  if (RTLLanguages.indexOf(language) !== -1) {
    return true
  } else {
    return false
  }
}

const needSwitchLanguage = (state, language) => {
  const { currentLanguage, deviceLocale } = state.translation
  if (currentLanguage && currentLanguage !== language) {
    return true
  } else if (deviceLocale && deviceLocale !== language) {
    return true
  } else {
    return false
  }
}

// const needSwitchLayout = (state) => {
//   const { isRTL } = state.translation
//   console.log(I18nManager.isRTL, isRTL)
//   if (I18nManager.isRTL !== isRTL) {
//     return true
//   } else {
//     return false
//   }
// }


export const detectLanguage = () => {
  let language = I18n.locale.substr(0, 2)
  let isRTL = isRTLLanguage(language)
  return {
    type: types.DETECH_LANGUAGE,
    language,
    isRTL
  }
}

export const switchLanguage = (language) => (dispatch, getState) => {
  if (needSwitchLanguage(getState(), language)) {
    // update display language
    I18n.locale = language
    // set display layout
    let isRTL = isRTLLanguage(language)
    I18nManager.forceRTL(isRTL)
    dispatch({
      type: types.SWITCH_LANGUAGE,
      language,
      isRTL
    })
  }
}

export const switchLayout = () => {
// (dispatch, getState) => {
  // if (needSwitchLayout(getState())) {
    setTimeout(() => {
      RNRestart.Restart()
    }, 1000)
  // }
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
