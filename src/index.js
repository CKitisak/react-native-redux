import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todoApp from './reducers'

import App from './components/App'
import { getTodo, getStyle } from './actions'

let middleware = [logger, thunk]

let store = createStore(todoApp, applyMiddleware(...middleware))
store.dispatch(getTodo())
store.dispatch(getStyle())


class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
