import React from 'react'
import { Provider } from 'react-redux'

import App from './components/App'
import configureStore from './configureStore'

const store = configureStore()

const reactNativeRedux = () => (
  <Provider store={ store }>
    <App />
  </Provider>
)

export default reactNativeRedux
