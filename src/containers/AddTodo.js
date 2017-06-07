import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
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
    const { styles, isFetching } = this.props

    if (isFetching) {
      return <Text>Loading...</Text>
    }

    return (
      <View style={ styles.form }>
        <TextInput
          onChangeText={ text => this.setState({ text }) }
          value={ this.state.text }
          underlineColorAndroid='transparent'
          placeholder='new todo...'
          style={ styles.input }
        />

        <TouchableOpacity
          onPress={ () => this._addTodo() }
          style={ styles.button }
        >
          <Text style={ styles.buttonTitle }>
            Add Todo
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  styles: StyleSheet.create(state.styleSheet.styles.addTodoForm),
  isFetching: state.styleSheet.isFetching
})

export default connect(mapStateToProps)(AddTodo)