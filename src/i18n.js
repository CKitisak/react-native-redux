import I18n from 'react-native-i18n'

I18n.fallbacks = true
I18n.translations = {
  en: {
    hello: 'Hello !',
    items: {
      one: '%{count} item',
      other: '%{count} items',
      zero: 'no item'
    }
  },
  th: {
    hello: 'สวัสดี !',
    items: {
      one: '%{count} ไอเท็ม',
      other: '%{count} ไอเท็ม',
      zero: 'ไม่มีไอเท็ม'
    }
  }
}

export default I18n
