import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

class Link extends Component {
  render () {
    const { active, children, onPress, styles } = this.props

    if (active) {
      return (
        <Text style={ styles.active }>
          { children }
        </Text>
      )
    }

    return (
      <TouchableOpacity onPress={ onPress }>
        <Text style={ styles.link }>
          { children }
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Link