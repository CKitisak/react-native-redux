import { connect } from 'react-redux'

import NavigationState from '../components/NavigationState'

// Pass state value into props
// ___________________________________
const mapStateToProps = (state) => ({
  nav: state.nav
})

// Connects component to store
// ___________________________________
const AppNavigationState = connect(mapStateToProps)(NavigationState)

export default AppNavigationState