import React from 'react'
import { View } from 'react-native'

import LoginStatusMessage from './LoginStatusMessage'
import AppBackground from '../containers/AppBackground'
import AuthButton from '../containers/AuthButton'

// Component
// ___________________________________
const MainScreen = () => (
  <AppBackground>
    <View style={{ flex:1, justifyContent: 'center' }}>
      <LoginStatusMessage />
    </View>
  </AppBackground>
)

// Screen Navigation Options
// ___________________________________
MainScreen.navigationOptions = {
  title: 'Main Screen',
  headerRight: <AuthButton />
}

export default MainScreen