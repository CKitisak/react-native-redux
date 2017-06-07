import React from 'react'
import { Text, View } from 'react-native'

import AppBackground from '../containers/AppBackground'
import AppBackgroundSetting from '../containers/AppBackgroundSetting'

import styles from '../styles'

// Component
// ___________________________________
const ProfileScreen = () => (
  <AppBackground>
    <Text style={ styles.titleText }>
      First name and Last Name
    </Text>
    <AppBackgroundSetting />
  </AppBackground>
)

// Screen Navigation Options
// ___________________________________
ProfileScreen.navigationOptions = {
  title: 'Profile'
}

export default ProfileScreen