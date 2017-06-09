import realm from '../models'

let nextTodoId = 0

export const getTodo = () => {
  let todo = realm.objects('Todo')
  nextTodoId = todo.length
  return {
    type: 'GET_TODO',
    todo
  }
}

export const addTodo = (title) => ({
  type: 'ADD_TODO',
  createdDate: new Date(),
  id: (nextTodoId++).toString(),
  title
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const getStyle = () => dispatch => {
  let styleSheet = realm.objects('StyleSheet')

  if (styleSheet.length === 0) {
    return dispatch(fetchStyle())
  } else {
    return dispatch(updateStyle(JSON.parse(styleSheet[0].styles)))
  }
}

export const updateStyle = (styles) => ({
  type: 'UPDATE_STYLE',
  styles: styles
})

export const saveStyle = (styles) => ({
  type: 'SAVE_STYLE',
  updatedDate: new Date(),
  styles
})

export const fetchStyle = () => dispatch => {
  return fetch('http://192.168.1.103:3000/styles.json')
    .then(response => response.json())
    .then(json => dispatch(saveStyle(json)))
}

