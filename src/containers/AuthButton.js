import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import AuthButtonComponent from '../components/AuthButton'

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
const AuthButton = connect(mapStateToProps, mapDispatchToProps)(AuthButtonComponent)

export default AuthButton