import { combineReducers } from 'redux'
import { UPDATE_SWITCH, UPDATE_SLIDER } from './actions'

const initialState = {
  sliderValue: 0,
  sliderIconMinValue: 'http://adrianols.ca/img/icons/winter.png',
  sliderIconMaxValue: 'https://cdn3.iconfinder.com/data/icons/vote/16/burning_fire_hot-256.png',
  switchValue: false,
  quality: '0 PPM 2',
  temperature: 20
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SWITCH:
      return {
        ...state,
        switchValue: action.value
      }
    case UPDATE_SLIDER:
      return {
        ...state,
        sliderValue: action.value
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  settings
})

export default reducers
