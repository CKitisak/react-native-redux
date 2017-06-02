import React, { Component } from 'react'
import { View } from 'react-native'

import CounterResult from '../containers/CounterResult'
import ButtonGroup from './ButtonGroup'

class CounterApp extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <CounterResult />
        <ButtonGroup />
      </View>
    )
  }
}

export default CounterApp