import React, { Component } from 'react'
import { View } from 'react-native'
import Todo from './Todo'

class TodoList extends Component {
  render () {
    const { todos, onTodoPress } = this.props

    return (
      <View>
        {todos.map(todo => (
          <Todo
            key={ todo.id }
            { ...todo }
            onPress={ ()=> onTodoPress(todo.id) }
          />
        ))}
      </View>
    )
  }
}

export default TodoList