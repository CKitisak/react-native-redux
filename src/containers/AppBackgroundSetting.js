import { connect } from 'react-redux'
import { checkBgImg, deleteBgImg } from '../actions/backgroundImage'

import BackgroundSetting from '../components/BackgroundSetting'

// Pass dispatch actions into props
// ___________________________________
const mapDispatchToProps = (dispatch) => ({
  changeBgImg: (url) =>
    dispatch(checkBgImg(url)),
  deleteBgImg: () =>
    dispatch(deleteBgImg())
})

// Connects component to store
// ___________________________________
const AppBackgroundSetting = connect(null, mapDispatchToProps)(BackgroundSetting)

export default AppBackgroundSetting