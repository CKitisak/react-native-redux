import React from 'react'
import configureStore from './configureStore'
import { fetchLanguages, detectLanguage } from './actions/translation'
import Root from './components/Root'

const store = configureStore()
store.dispatch(fetchLanguages())
store.dispatch(detectLanguage())

const reactNativeRedux = () => (
  <Root store={ store } />
)

export default reactNativeRedux
