export const UPDATE_SWITCH = 'UPDATE_SWITCH'
export const UPDATE_SLIDER = 'UPDATE_SLIDER'

export const updateSlider = (value) => ({
  type: UPDATE_SLIDER,
  value
})

export const updateSwitch = (value) => ({
  type: UPDATE_SWITCH,
  value
})
