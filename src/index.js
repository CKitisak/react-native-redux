import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import App from './components/App'

const store = configureStore()

const reactNativeRedux = () => (
  <Provider store={ store }>
    <App />
  </Provider>
)

export default reactNativeRedux
