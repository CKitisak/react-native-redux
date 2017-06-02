import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

// Component
// ___________________________________
const AuthButton = ({ logout, loginScreen, isLoggedIn }) => (
  <View style={{ padding: 10 }}>
    <Button
      title={ isLoggedIn ? 'Logout' : 'Login' }
      onPress={ isLoggedIn ? logout : loginScreen }
    />
  </View>
)

// Defined type of props
// ___________________________________
AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired
}

// Pass state values into props
// ___________________________________
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

// Pass dispatch actions into props
// ___________________________________
const mapDispatchToProps = (dispatch) => ({
  logout: () =>
    dispatch({ type: 'Logout' }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
})

// Connects component to store
// ___________________________________
AuthButton = connect(mapStateToProps, mapDispatchToProps)(AuthButton)

export default AuthButton