import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const configureStore = () => {
  let middlewares = []

  if (__DEV__) {
    // LOGGER
    const logger = createLogger({ collapsed: true })
    middlewares.push(logger)
  }

  return createStore(reducers, applyMiddleware(...middlewares))
}

export default configureStore
