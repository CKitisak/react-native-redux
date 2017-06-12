import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import TodoFilter from './TodoFilter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ isFetching }) => {
  if (isFetching) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <AddTodo />
      <TodoFilter />
      <VisibleTodoList />
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.styleSheet.isFetching
})

App = connect(mapStateToProps)(App)

export default App
