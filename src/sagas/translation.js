import { call, put, select } from 'redux-saga/effects'
import { Alert, I18nManager } from 'react-native'
import RNRestart from 'react-native-restart'

import I18n from '../i18n'
import {
  fetchTranslationSuccess,
  fetchTranslationError,
  switchLanguage,
  switchLanguageSuccess
} from '../actions/translation'

const api = (url, options = null) => {
  return fetch(url, options)
          .then(response => {
            if (response.ok) {
              setTimeout(() => null, 1000)
              return response.json()
            } else {
              var error = new Error(response.statusText)
              throw error
            }
          })
          .then(json => json)
}

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

const restart = () => {
  setTimeout(() => {
    RNRestart.Restart()
  }, 3000)
}

export function* detectLanguage (action) {
  // look from state
  let language = yield select(state => state.translation.language)
  console.log('current language is ', language)
  if (language && language !== action.language) {
    console.log('current language is not same device language')
    console.log('update display language to ', language)
    yield put(switchLanguage(language))
  } else {
    console.log('no current language, use device locale')
    // no current language, use device locale

    // update display language
    // console.log('update display language to ', action.language)
    // yield put(switchLanguage(action.language))
  }
}

export function* fetchTranslation (action) {
  try {
    if (action.fromStore) {
      I18n.translations = yield select(state => state.translation.languages)
    } else {
      const response = yield call(api, 'http://192.168.1.2:3000/languages')
      I18n.translations = response
    }
    yield put(fetchTranslationSuccess(I18n.translations))
  } catch (error) {
    yield put(fetchTranslationError(error.message))
  }
}

export function* updateAppearance (action) {
  console.log('update appearance')
  console.log(action.language)
  // is current layout RTL
  const currentLayout = yield select(state => state.translation.isRTL)
  // is new layout RTL
  const newLayout = isRTLLanguage(action.language)
  console.log('currentLayout=>', currentLayout)
  console.log('newLayout=>', newLayout)
  console.log(currentLayout === newLayout)
  // set display langauge
  I18n.locale = action.language
  if (currentLayout === newLayout) {
    console.log(I18n.locale)
    yield put(switchLanguageSuccess(currentLayout))
  } else {
    // set display layout
    console.log('update layout')
    I18nManager.allowRTL(newLayout)
    I18nManager.forceRTL(newLayout)
    yield put(switchLanguageSuccess(newLayout))

    // restart app to update the layout
    console.log('Restart Alert')
    Alert.alert(
      'Layout is changed',
      'Application will restart',
      [
        { text: 'OK', onPress: restart }
      ],
      { cancelable: false }
    )
  }
}
