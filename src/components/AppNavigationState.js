import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import AppNavigator from '../containers/AppNavigator'

// Component
// ___________________________________
const AppNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={
      addNavigationHelpers({
        dispatch,
        state: nav
      })
    }
  />
)

// Defined type of props
// ___________________________________
AppNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
}

// Pass state value into props
// ___________________________________
const mapStateToProps = (state) => ({
  nav: state.nav
})

// Connects component to store
// ___________________________________
AppNavigationState = connect(mapStateToProps)(AppNavigationState)

export default AppNavigationState