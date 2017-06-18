import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { AsyncStorage } from 'react-native'

import { detectLanguage, fetchTranslation, switchLanguage } from './actions/translation'
import reducers from './reducers'
import rootSaga from './sagas'

// AsyncStorage.clear()

const configureStore = () => {
  const middlewares = []

  // ~~~ SAGA MIDDLEWARE
  const saga = createSagaMiddleware()
  middlewares.push(saga)

  // ~~~ LOGGER MIDDLEWARE
  if (__DEV__) {
    const logger = createLogger({
      collapsed: true
    })
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
  persistStore(store, persistConfig, (error, state) => {
    const { translation } = state
    let languages = translation && translation.languages
    let language = translation && translation.language
    console.log(language)
    console.log(languages)
    if (languages) {
      store.dispatch(fetchTranslation(true))
    } else {
      store.dispatch(fetchTranslation())
    }
    // if (language) {
    //   store.dispatch(switchLanguage(language))
    // } else {
      store.dispatch(detectLanguage())
    // }
  })

  // ~~~ SAGA START
  saga.run(rootSaga)

  return store
}

export default configureStore
