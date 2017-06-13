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

const fakeDatabase = {
  en: {
    _name: 'English',
    greeting: 'Hi!',
    welcome: 'Welcome'
  },
  th: {
    _name: 'ไทย',
    greeting: 'สวัสดี!',
    welcome: 'ยินดีต้อนรับ'
  }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve(), ms))

export const fetchLanguages = () => (dispatch) => {
  dispatch({ type: types.FETCH_LANGUAGES })
  delay(1000).then(() => {
    I18n.translations = fakeDatabase
    dispatch({
      type: types.FETCH_LANGUAGES_DONE,
      languages: fakeDatabase
    })
  })
}
