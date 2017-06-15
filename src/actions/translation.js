import * as types from './actionTypes'
import I18n from '../i18n'

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

export const detectLanguage = () => {
  let language = I18n.locale.substr(0, 2)
  let isRTL = isRTLLanguage(language)
  return {
    type: types.DETECH_LANGUAGE,
    language,
    isRTL
  }
}

export const switchLanguage = (language) => ({
  type: types.SWITCH_LANGUAGE,
  language,
  isRTL: isRTLLanguage(language)
})

export const fetchTranslation = () => ({
  type: types.FETCH_TRANSLATION
})

export const fetchTranslationSuccess = (languages) => ({
  type: types.FETCH_TRANSLATION_SUCCESS,
  languages
})

export const fetchTranslationError = (message) => ({
  type: types.FETCH_TRANSLATION_ERROR,
  message
})
