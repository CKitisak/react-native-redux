import realm from '../models'

const todo = (state = {}, action) => {
  let todoItem
  switch (action.type) {
    case 'ADD_TODO':
      // keep todo in realmDB
      realm.write(() => {
        todoItem = realm.create('Todo', {
          id: action.id,
          title: action.title,
          createdDate: action.createdDate,
          done: false
        })
      })
      return todoItem
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state
      // Update todo done by id
      realm.write(() => {
        todoItem = realm.create('Todo', {
          id: action.id,
          done: !state.done
        }, true)
      })
      return todoItem
    default:
      return state
  }
}

const todos = (state = [], action = {}) => {
  switch (action.type) {
    case 'GET_TODO':
      return action.todo
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(item =>
        todo(item, action)
      )
    default:
      return state
  }
}

export default todos
