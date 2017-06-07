import React, { Component } from 'react'
import { Text } from 'react-native'

class Todo extends Component {
  render() {
    const { onPress, done, text, styles } = this.props

    return (
      <Text
        style={ [styles.todoText, { textDecorationLine: done ? 'line-through' : 'none' }] }
        onPress={ onPress }>
        {text}
      </Text>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  styles: StyleSheet.create(state.styleSheet.styles.todoList)
})

export default Todo