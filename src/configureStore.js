import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const configureStore = () => {
  const middlewares = []

  if (__DEV__) {
    const logger = createLogger({ collapsed: true })
    middlewares.push(logger)
  }

  return createStore(
    reducers,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
