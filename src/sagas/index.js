import { takeLatest } from 'redux-saga/effects'

import * as types from '../actions/actionTypes'
import * as translationActions from './translation'

export default function* rootSaga() {
  yield takeLatest(types.DETECH_LANGUAGE, translationActions.detectLanguage)
  yield takeLatest(types.FETCH_TRANSLATION, translationActions.fetchTranslation)
}
