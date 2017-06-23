import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BackHandler, Text, WebView } from 'react-native'
import { NavigationActions } from 'react-navigation'

import styles from '../styles'

// Component
// ___________________________________
// const MainContent = ({ isLoggedIn, dispatch }) => {
class MainContent extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => this.handleBack())
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', () => this.handleBack())
  }

  handleBack () {
    console.log(this._webView)
    this._webView.goBack()
    return true
  }

  _onShouldStartLoadWithRequest (request) {
    console.log(request)
    if (request.url === 'https://github.com/facebook/react-native/find/master') {
      this._webView.stopLoading()
      this.props.dispatch(NavigationActions.navigate({
        routeName: 'Detail'
      }))
      return false
    } else {
      return true
    }
  }

  render () {
    const { isLoggedIn, dispatch } = this.props
    if (!isLoggedIn) {
      return (
        <Text style={ styles.subTitleText }>
          Please Log in!
        </Text>
      )
    }

    return (
      <WebView
        ref={ component => this._webView = component }
        //style={{ backgroundColor: '#222', height: 200 }}
        //scalesPageToFit={ true }
        startInLoadingState={ true }
        //automaticallyAdjustContentInsets={ true }
        source={{ uri: 'https://github.com/facebook/react-native' }}
        onNavigationStateChange={ (navState) => this._onShouldStartLoadWithRequest(navState) }
        //onShouldStartLoadWithRequest={ (navState) => this._onShouldStartLoadWithRequest(navState) }
      />
    )
  }
}

// Defined type of props
// ___________________________________
MainContent.propTypes = {
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
MainContent = connect(mapStateToProps)(MainContent)

export default MainContent
