import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

class Link extends Component {
  render () {
    const { active, children, onPress } = this.props

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

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  },
  active: {
    color: 'gray',
    fontWeight: 'bold'
  }
})

export default Link