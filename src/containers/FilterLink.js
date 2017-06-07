import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { StyleSheet } from 'react-native'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  styles: StyleSheet.create(state.styleSheet.styles.filterForm),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink