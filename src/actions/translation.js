import * as types from './actionTypes'
import I18n from '../i18n'
import { I18nManager } from 'react-native'

export const detectLanguage = () => ({
  type: types.DETECH_LANGUAGE,
  language: I18n.locale.substr(0, 2),
  isRTL: I18nManager.isRTL
})

export const switchLanguage = (language) => ({
  type: types.SWITCH_LANGUAGE,
  language
})

export const switchLanguageSuccess = (isRTL) => ({
  type: types.SWITCH_LANGUAGE_SUCCESS,
  isRTL
})

export const fetchTranslation = (fromStore) => ({
  type: types.FETCH_TRANSLATION,
  fromStore
})

export const fetchTranslationSuccess = (languages) => ({
  type: types.FETCH_TRANSLATION_SUCCESS,
  languages
})

export const fetchTranslationError = (message) => ({
  type: types.FETCH_TRANSLATION_ERROR,
  message
})
