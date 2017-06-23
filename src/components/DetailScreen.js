import React from 'react'
import { Text, View } from 'react-native'

import styles from '../styles'

// Component
// ___________________________________
const DetailScreen = () => (
  <View style={ styles.container }>
    <Text>
      some contents...
    </Text>
  </View>
)

// Screen Navigation Options
// ___________________________________
DetailScreen.navigationOptions = {
  title: 'Detail Screen'
}

export default DetailScreen
