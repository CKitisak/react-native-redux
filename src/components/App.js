import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import TextTranslate from './TextTranslate'
import LanguagePicker from '../containers/LanguagePicker'

const App = ({ currentLanguage, deviceLocale, isLoading }) => {
  if (isLoading) return (
    <Text>Loading...</Text>
  )
  return (
    <View>
      <Text>
        currentLanguage => { currentLanguage }
      </Text>
      <Text>
        deviceLocale => { deviceLocale }
      </Text>
      <TextTranslate text='greeting' style={{ color: 'blue' }} />
      <TextTranslate text='text' />
      <LanguagePicker />
    </View>
  )
}

const mapState = (state) => ({
  currentLanguage: state.translation.currentLanguage,
  deviceLocale: state.translation.deviceLocale,
  isLoading: state.translation.isLoading
})

App = connect(mapState)(App)

export default App
