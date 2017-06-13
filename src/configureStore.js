import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'

const configureStore = () => {
  const middlewares = [thunk, logger]
  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  )
  return store
}

export default configureStore
