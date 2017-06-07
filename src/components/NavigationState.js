import React, { PropTypes } from 'react'
import { addNavigationHelpers } from 'react-navigation'

import AppNavigator from '../containers/AppNavigator'

// Component
// ___________________________________
const NavigationState = ({ dispatch, nav }) => (
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
NavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
}

export default NavigationState