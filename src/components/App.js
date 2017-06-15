import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'

import TextTranslate from './TextTranslate'
import LanguagePicker from '../containers/LanguagePicker'
import { switchLayout } from '../actions/translation'

// const App = ({ currentLanguage, deviceLocale, isRTL, isLoading }) => {
class App extends Component {
  // componentDidMount () {

  // }

  componentDidUpdate (prevProps) {
    if (this.props.isRTL !== prevProps.isRTL) {
      // this.props.dispatch(
        switchLayout()
        // )
    }
  }

  render () {
    let { currentLanguage, deviceLocale, isRTL, isLoading } = this.props
    if (isLoading) return (
      <Text>Loading...</Text>
    )
    return (
      <View>
        <TextTranslate text='greeting' style={{ fontSize: 25, color: 'blue' }} />
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <View style={{ flex: 1 }}>
            <TextTranslate text='text' style={{ paddingLeft: 10 }} />
          </View>
          <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: 'https://unsplash.it/100?image=25' }}
            />
          </View>
        </View>
        <LanguagePicker />
        <Text>
          currentLanguage => { currentLanguage }
        </Text>
        <Text>
          deviceLocale => { deviceLocale }
        </Text>
        <Text>
          isRTL => { isRTL.toString() }
        </Text>
      </View>
    )
  }
}

const mapState = (state) => ({
  currentLanguage: state.translation.currentLanguage,
  deviceLocale: state.translation.deviceLocale,
  isRTL: state.translation.isRTL,
  isLoading: state.translation.isLoading
})

App = connect(mapState)(App)

export default App
