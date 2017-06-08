import {
  GET_BACKGROUND_IAMGE,
  GET_BACKGROUND_IMAGE_DONE,
  DELETE_BACKGROUND_IMAGE
} from '../actions/backgroundImage'

const initialState = {
  url: '',
  isFetching: false
}

const backgroundImage = (state = initialState, action) => {
  switch (action.type) {
    case GET_BACKGROUND_IAMGE:
      return {
        ...state,
        isFetching: true
      }
    case GET_BACKGROUND_IMAGE_DONE:
      return {
        url: action.url,
        isFetching: false
      }
    case DELETE_BACKGROUND_IMAGE:
      return initialState
    default:
      return state
  }
}

export default backgroundImage