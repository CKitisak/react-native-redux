import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import FilterLink from '../containers/FilterLink'

class TodoFilter extends Component {
  render () {
    const { styles, isFetching } = this.props

    return (
      <View style={ styles.filterBox }>
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

const mapStateToProps = (state, ownProps) => ({
  styles: StyleSheet.create(state.appStyle.filterForm)
})

export default connect(mapStateToProps)(TodoFilter)
