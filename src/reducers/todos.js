import realm from '../models'

const todo = (state = {}, action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      let todoItem = {
        id: action.id,
        title: action.title,
        createdDate: action.createdDate,
        done: false
      }
      // keep todo in realmDB
      realm.write(() => {
        realm.create('Todo', todoItem)
      })

      return todoItem
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state

      // Update todo done by id
      let done = !state.done
      realm.write(() => {
        realm.create('Todo', {
          id: action.id,
          done
        }, true)
      })
      return {
        ...state,
        done
      }
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
