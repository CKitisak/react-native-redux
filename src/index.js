import React from 'react'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()

const reactNativeRedux = () => (
  <Root store={ store } />
)

export default reactNativeRedux
