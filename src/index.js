import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import AppReducers from './reducers'
import AppNavigationState from './components/AppNavigationState'

const store = createStore(AppReducers, applyMiddleware(logger))

const Root = () => (
  <Provider store={ store }>
    <AppNavigationState />
  </Provider>
)

export default Root