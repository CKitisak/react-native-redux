import React, { Component } from 'react'
import { View } from 'react-native'

import TodoFilter from './TodoFilter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <AddTodo />
        <TodoFilter />
        <VisibleTodoList />
      </View>
    )
  }
}

export default App