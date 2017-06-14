import React from 'react'
import { Text, View, Image } from 'react-native'
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
      <View style={{ flexDirection: 'row' }}>
        <TextTranslate text='text' style={{ flex: 1 }} />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
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
