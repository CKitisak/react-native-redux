import I18n from 'react-native-i18n'

I18n.defaultLocale = 'en'
I18n.fallbacks = true
I18n.translations = {}

export default I18n

export const translate = (key) => {
  let currentLanguage = I18n.locale.substr(0, 2) || I18n.defaultLocale
  if (I18n.translations[currentLanguage] && I18n.translations[currentLanguage][key]) {
    return I18n.t(key)
  } else {
    return ''
  }
}
