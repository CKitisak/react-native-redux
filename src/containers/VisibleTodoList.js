import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_DONE':
      // filter by realm api
      return todos.filtered('done = true')
    case 'SHOW_ACTIVE':
      // filter by realm api
      return todos.filtered('done = false')
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  styles: state.appStyle.todoList
})

const mapDispatchToProps = (dispatch) => ({
  onTodoPress: (id) => {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
