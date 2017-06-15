import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import TextTranslate from './TextTranslate'
import { detectLanguage } from '../actions/translation'

class App extends Component {
  render () {
    let { deviceLocale, isRTL, detectLanguage } = this.props
    return (
      <View>
        <Text onPress={ detectLanguage }>
          deviceLocale => { deviceLocale } |
          isRTL => { String(isRTL) }
        </Text>

        <TextTranslate text='hello' />
        <TextTranslate text='items' option={{ count: 1 }} />
        <TextTranslate text='items' option={{ count: 10 }} />
        <TextTranslate text='items' option={{ count: 0 }} />
      </View>
    )
  }
}

const mapState = (state) => ({
  deviceLocale: state.translation.deviceLocale,
  isRTL: state.translation.isRTL
})

const mapDispatch = (dispatch) => ({
  detectLanguage: () => dispatch(detectLanguage())
})

App = connect(mapState, mapDispatch)(App)

export default App
