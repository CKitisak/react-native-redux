import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate, createTransform } from 'redux-persist'
import { AsyncStorage } from 'react-native'
// AsyncStorage.clear()
import reducers from './reducers'

import { switchLanguage } from './actions/translation'

const translationTransform = createTransform(
  (state) => ({ currentLanguage: state.currentLanguage, isRTL: state.isRTL }),
  (state) => ({ currentLanguage: state.currentLanguage, isRTL: state.isRTL }),
  { whitelist: 'translation'}
)

const configureStore = () => {
  const middlewares = [thunk, logger]
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate()
    )
  )

  const persistConfig = {
    storage: AsyncStorage,
    whitelist: ['translation'],
    transforms: [translationTransform]
  }
  persistStore(store, persistConfig, (error, state) => {
    if (!error) {
      store.dispatch(switchLanguage(state.translation.currentLanguage))
    }
  })

  return store
}

export default configureStore
