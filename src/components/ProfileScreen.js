import React from 'react'
import { Text, View } from 'react-native'

import styles from '../styles'

// Component
// ___________________________________
const ProfileScreen = () => (
  <View style={ styles.container }>
    <Text style={ styles.titleText }>
      Profile Screen
    </Text>
  </View>
)

// Screen Navigation Options
// ___________________________________
ProfileScreen.navigationOptions = {
  title: 'Profile'
}

export default ProfileScreen