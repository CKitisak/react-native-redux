import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { checkBgImg } from './actions/backgroundImage'
import AppReducers from './reducers'
import AppNavigationState from './containers/AppNavigationState'

const middleware = [thunk, logger]

const store = createStore(AppReducers, applyMiddleware(...middleware))

store.dispatch(checkBgImg())

const Root = () => (
  <Provider store={ store }>
    <AppNavigationState />
  </Provider>
)

export default Root