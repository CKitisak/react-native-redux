import React from 'react'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()

const AppRoot = () => (
  <Root store={ store } />
)

export default AppRoot
