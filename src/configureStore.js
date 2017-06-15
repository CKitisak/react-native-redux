import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'

const configureStore = () => {
  const middlewares = []

  // ~~~ SAGA MIDDLEWARE
  const saga = createSagaMiddleware()
  middlewares.push(saga)

  // ~~~ REDUX MIDDLEWARE
  if (__DEV__) {
    middlewares.push(logger)
  }

  // ~~~ REDUX STORE
  const store = createStore(
    reducers,
    applyMiddleware(...middlewares),
  )

  // ~~~ START SAGA
  saga.run(rootSaga)

  return store
}

export default configureStore
