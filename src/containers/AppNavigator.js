import { StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen'
import MainScreen from '../components/MainScreen'
import DetailScreen from '../components/DetailScreen'

const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Detail: { screen: DetailScreen },
})

export default AppNavigator
