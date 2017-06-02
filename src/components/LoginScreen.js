import React, { PropTypes } from 'react'
import { Button, Text, View } from 'react-native'

import styles from '../styles'

// Component
// ___________________________________
const LoginScreen = ({ navigation }) => (
  <View style={ styles.container }>
    <Text style={ styles.titleText }>
      Welcome
    </Text>
    <Text style={ styles.subTitleText }>
      To get access the data, Please log in
    </Text>
    <Button
      title='Log in'
      onPress={() => navigation.dispatch({ type: 'Login' }) }
    />
  </View>
)

// Defined type of props
// ___________________________________
LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

// Screen Navigation Options
// ___________________________________
LoginScreen.navigationOptions = {
  title: 'Log In'
}

export default LoginScreen