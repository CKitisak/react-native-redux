import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import * as types from '../actions/actionTypes'
import CounterButton from '../containers/CounterButton'

class ButtonGroup extends Component {
  render () {
    return (
      <View style={ styles.buttonGroup }>
        <CounterButton action={ types.INCREMENT }>
          +
        </CounterButton>
        <CounterButton action={ types.RESET }>
          0
        </CounterButton>
        <CounterButton action={ types.DECREMENT }>
          -
        </CounterButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default ButtonGroup