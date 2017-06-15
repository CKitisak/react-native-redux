import { call, put, select } from 'redux-saga/effects'
import { I18nManager } from 'react-native'
import RNRestart from 'react-native-restart'
import I18n from '../i18n'
import {
  fetchTranslationSuccess,
  fetchTranslationError,
  switchLanguage
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

export function* detectLanguage (action) {
  const language = yield select(state => state.translation.currentLanguage)
  console.log(language, '===', action.language)
  if (language && language !== action.language) {
    // switch to setting language
    console.log('switch language to ', language)
    yield put(switchLanguage(language))
  }
}

export function* fetchTranslation (action) {
  try {
    const response = yield call(api, 'http://192.168.1.2:3000/languages')
    console.log(response)
    I18n.translations = response
    console.log(I18n.translations)
    yield put(fetchTranslationSuccess(response))
  } catch (error) {
    yield put(fetchTranslationError(error.message))
  }
}

export function* updateAppearance (action) {
  console.log('updateAppearance')
  const isRTL = yield select(state => state.translation.isRTL)
  I18n.locale = action.language
  console.log(isRTL, action.isRTL)
  if (isRTL !== action.isRTL) {
    console.log('Restart')
    I18nManager.forceRTL(action.isRTL)
    // RNRestart.Restart()
  }
}
