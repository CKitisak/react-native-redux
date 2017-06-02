import React from 'react'
import { View } from 'react-native'

import styles from '../styles'

import AuthButton from './AuthButton'
import LoginStatusMessage from './LoginStatusMessage'

// Component
// ___________________________________
const MainScreen = () => (
  <View style={ styles.container }>
    <LoginStatusMessage />
  </View>
)

// Screen Navigation Options
// ___________________________________
MainScreen.navigationOptions = {
  title: 'Main Screen',
  headerRight: <AuthButton />
}

export default MainScreen