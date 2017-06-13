import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { translate } from '../i18n'
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
      <Text>
        { translate('greeting') }
      </Text>
      <Text>
        { translate('welcome') }
      </Text>
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
