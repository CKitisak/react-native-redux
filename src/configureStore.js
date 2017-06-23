import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import reducers from './reducers'

const configureStore = () => {
  const middlewares = [logger]

  return createStore(
    reducers,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
