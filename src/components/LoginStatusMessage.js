import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

import styles from '../styles'

// Component
// ___________________________________
const LoginStatusMessage = ({ isLoggedIn, dispatch }) => {
  if (!isLoggedIn) {
    return (
      <Text style={ styles.subTitleText }>
        Please Log in!
      </Text>
    )
  }

  return (
    <View>
      <Text style={ styles.titleText }>
        You are logged in now
      </Text>
      <Button
        title='Profile'
        onPress={() =>
          dispatch(NavigationActions.navigate({
            routeName: 'Profile'
          }))
        }
      />
    </View>
  )
}

// Defined type of props
// ___________________________________
LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

// Pass state value into props
// ___________________________________
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

// Connects component to store
// ___________________________________
LoginStatusMessage = connect(mapStateToProps)(LoginStatusMessage)

export default LoginStatusMessage