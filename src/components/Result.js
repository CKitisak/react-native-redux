import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Result extends Component {
  render () {
    const { result } = this.props

    return (
      <View style={ styles.resultBox }>
        <Text style={ styles.resultText }>
          { result }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  resultBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10
  },
  resultText: {
    fontSize: 120,
    color: 'gray'
  }
})

export default Result