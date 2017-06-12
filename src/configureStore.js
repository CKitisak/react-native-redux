import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import reducers from './reducers'
import { fetchStyleSheetIfNeeded } from './actions/styleSheet'

const configureStore = () => {
  const middlewares = [thunk, logger]
  const store = createStore(
    reducers,
    undefined,
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate()
    )
  )
  const persistStoreOptions = {
    storage: AsyncStorage,
    whitelist: ['styleSheet', 'todos']
  }
  persistStore(store, persistStoreOptions, () => {
    store.dispatch(fetchStyleSheetIfNeeded())
  })
  return store
}

export default configureStore
