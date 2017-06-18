import { AppRegistry } from 'react-native'
import reactNativeRedux from './src'
import { Client, Configuration } from "bugsnag-react-native"

let configuration = new Configuration()
configuration.apiKey = 'd71968edde04581708a6e203a7dcd0f3'
let client = new Client(configuration)
client.notify

AppRegistry.registerComponent('reactNativeRedux', () => reactNativeRedux);
