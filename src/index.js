import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todoApp from './reducers'

import App from './components/App'
import { fetchStyleSheet } from './actions/styleSheet'

const middleware = [logger, thunk]

let store = createStore(todoApp, applyMiddleware(...middleware))

store.dispatch(fetchStyleSheet())

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