import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

class Button extends Component {
  render () {
    const { children, onPress } = this.props

    return (
      <TouchableOpacity
        style={ styles.button }
        onPress={ onPress }
      >
        <Text style={ styles.buttonTitle }>
          { children }
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  buttonTitle: {
    fontSize: 35,
    color: 'white'
  }
})

export default Button