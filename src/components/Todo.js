import React, { Component } from 'react'
import { Text } from 'react-native'

class Todo extends Component {
  render() {
    const { onPress, done, text } = this.props

    return (
      <Text
        style={{ textDecorationLine: done ? 'line-through' : 'none' }}
        onPress={ onPress }>
        {text}
      </Text>
    )
  }
}

export default Todo