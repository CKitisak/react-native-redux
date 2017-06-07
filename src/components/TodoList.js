import React, { Component } from 'react'
import { View } from 'react-native'
import Todo from './Todo'

class TodoList extends Component {
  render () {
    const { todos, onTodoPress, styles } = this.props

    return (
      <View style={ styles.todoListBox }>
        {todos.map(todo => (
          <Todo
            key={ todo.id }
            { ...todo }
            styles={ styles }
            onPress={ ()=> onTodoPress(todo.id) }
          />
        ))}
      </View>
    )
  }
}

export default TodoList