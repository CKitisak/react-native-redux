import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import { detectLanguage, fetchTranslation } from './actions/translation'
import reducers from './reducers'
import rootSaga from './sagas'

// AsyncStorage.clear()

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
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate()
    )
  )

  // ~~~ PERSIST START
  const persistConfig = {
    storage: AsyncStorage
  }
  persistStore(store, persistConfig, () => {
    store.dispatch(fetchTranslation())
    store.dispatch(detectLanguage())
  })

  // ~~~ SAGA START
  saga.run(rootSaga)

  return store
}

export default configureStore
