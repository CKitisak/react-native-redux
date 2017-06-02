import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  _addTodo () {
    if (this.state.text === '') return
    this.props.dispatch(addTodo(this.state.text))
    this.setState({ text: '' })
  }

  render () {
    return (
      <View>
        <TextInput
          onChangeText={ text => this.setState({ text }) }
          value={ this.state.text }
        />

        <TouchableOpacity onPress={ () => this._addTodo() }>
          <Text>
            Add Todo
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddTodo)