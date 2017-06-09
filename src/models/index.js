import Realm from 'realm'

import StyleSheetSchema from './StyleSheet'
import TodoSchema from './Todo'

const realm = new Realm({
  schema: [
    StyleSheetSchema,
    TodoSchema
  ]
})

export default realm
