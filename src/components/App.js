import React from 'react'
import { Image, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { detectLanguage } from '../actions/translation'
import LanguagePicker from '../containers/LanguagePicker'
import TextTranslate from './TextTranslate'

const App = ({ currentLanguage, deviceLocale, isRTL, isFetching }) => {
  if (isFetching) {
    return <Text>Loading...</Text>
  }
  return (
    <View style={{ flex: 1 }}>
      <Text>
        currentLanguage => { currentLanguage } |
        deviceLocale => { deviceLocale } |
        isRTL => { String(isRTL) }
      </Text>
      <LanguagePicker />
      <TextTranslate text='greeting' />
      <TextTranslate text='items' option={{ count: 1 }} />
      <TextTranslate text='items' option={{ count: 10 }} />
      <TextTranslate text='items' option={{ count: 0 }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 100 }}>
          <Image
            source={{ uri: 'https://unsplash.it/100?image=25' }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextTranslate text='text' />
        </View>
      </View>
    </View>
  )
}

const mapState = (state) => ({
  currentLanguage: state.translation.currentLanguage,
  deviceLocale: state.translation.deviceLocale,
  isRTL: state.translation.isRTL,
  isFetching: state.translation.isFetching
})

App = connect(mapState)(App)

export default App
