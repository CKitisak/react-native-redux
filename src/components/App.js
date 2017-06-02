import React, { Component } from 'react'
import { View } from 'react-native'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  render () {
    return (
      <View>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </View>
    )
  }
}

export default App