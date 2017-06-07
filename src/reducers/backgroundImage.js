const initialState = { url: 'https://unsplash.it/500?image=52' }

const backgroundImage = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_BACKGROUND_IMAGE':
      return {
        url: action.url
      }
    case 'DELETE_BACKGROUND_IMAGE':
      return initialState
    default:
      return state
  }
}

export default backgroundImage