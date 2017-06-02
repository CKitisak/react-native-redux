import { connect } from 'react-redux'

import * as types from '../actions/actionTypes'
import * as actions from '../actions/counter'
import Button from '../components/Button'

const counter = (action) => {
  switch (action) {
    case types.INCREMENT:
      return actions.increment()
    case types.DECREMENT:
      return actions.decrement()
    case types.RESET:
      return actions.reset()
    default:
      return
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => dispatch(counter(ownProps.action))
})

const CounterButton = connect(null, mapDispatchToProps)(Button)

export default CounterButton