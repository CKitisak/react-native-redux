import { connect } from 'react-redux'

import Background from '../components/Background'

// Pass state value into props
// ___________________________________
const mapStateToProps = (state) => ({
  bgImg: state.backgroundImage.url,
  isFetching: state.backgroundImage.isFetching
})

// Connects component to store
// ___________________________________
const AppBackground = connect(mapStateToProps)(Background)

export default AppBackground