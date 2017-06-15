import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import App from './components/App'
import { detectLanguage, fetchTranslation } from './actions/translation'

const store = configureStore()
store.dispatch(detectLanguage())
store.dispatch(fetchTranslation())

const reactNativeRedux = () => (
  <Provider store={ store }>
    <App />
  </Provider>
)

export default reactNativeRedux
