import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FilterLink from '../containers/FilterLink'

class Footer extends Component {
  render () {
    return (
      <View>
        <Text>
          Show:
        </Text>
        <FilterLink filter='SHOW_ALL'>
          All
        </FilterLink>
        <FilterLink filter='SHOW_ACTIVE'>
          Active
        </FilterLink>
        <FilterLink filter='SHOW_DONE'>
          Done
        </FilterLink>
      </View>
    )
  }
}

export default Footer