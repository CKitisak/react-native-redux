import { connect } from 'react-redux'

import Result from '../components/Result'

const mapStateToProps = (state) => ({
  result: state.counter
})

const CounterResult = connect(mapStateToProps)(Result)

export default CounterResult