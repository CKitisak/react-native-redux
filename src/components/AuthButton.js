import React, { PropTypes } from 'react'
import { Button, View } from 'react-native'

// Component
// ___________________________________
const AuthButtonComponent = ({ logout, loginScreen, isLoggedIn }) => (
  <View style={{ padding: 10 }}>
    <Button
      title={ isLoggedIn ? 'Logout' : 'Login' }
      onPress={ isLoggedIn ? logout : loginScreen }
    />
  </View>
)

// Defined type of props
// ___________________________________
AuthButtonComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired
}

export default AuthButtonComponent