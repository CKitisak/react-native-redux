import { call, put, select } from 'redux-saga/effects'

import {
  fetchTranslationSuccess,
  fetchTranslationError
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

const getLanguage = state => state.translation.language

export function* detectLanguage (action) {
  const language = yield select(getLanguage)
  console.log(language)
  console.log(action)
}

export function* fetchTranslation (action) {
  try {
    const response = yield call(api, 'http://192.168.1.2:3000/languages')
    yield put(fetchTranslationSuccess(response))
  } catch (error) {
    yield put(fetchTranslationError(error.message))
  }
}
