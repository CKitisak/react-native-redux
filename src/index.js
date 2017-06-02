import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import appReducers from './reducers'
import CounterApp from './components/CounterApp'

const store = createStore(appReducers, applyMiddleware(logger))

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <CounterApp />
      </Provider>
    );
  }
}

export default Root