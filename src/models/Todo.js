const TodoSchema = {
  name: 'Todo',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: { type: 'string', indexed: true },
    done: { type: 'bool', default: false },
    createdDate: 'date'
  }
}

export default TodoSchema
