import { AsyncStorage } from 'react-native'

const storageKey = 'BACKGROUND_IMAGE'

export const GET_BACKGROUND_IAMGE = 'GET_BACKGROUND_IAMGE'
export const GET_BACKGROUND_IMAGE_DONE = 'GET_BACKGROUND_IMAGE_DONE'
export const DELETE_BACKGROUND_IMAGE = 'DELETE_BACKGROUND_IMAGE'

export const getBgImg = () => ({
  type: GET_BACKGROUND_IAMGE
})

export const getBgImgDone = (url) => {
  AsyncStorage.setItem(storageKey, url)
  return {
    type: GET_BACKGROUND_IMAGE_DONE,
    url
  }
}

export const deleteBgImg = () => {
  AsyncStorage.removeItem(storageKey)
  return {
    type: DELETE_BACKGROUND_IMAGE
  }
}

export const checkBgImg = (url) => dispatch => {
  dispatch(getBgImg())
  if (!url) {
    // get current background image url from local storage
    return AsyncStorage.getItem(storageKey, (error, result) => {
      if (error || !result) {
        // set default background image url
        result = 'https://unsplash.it/500?image=52'
      }
      return dispatch(getBgImgDone(result))
    })
  } else {
    // return new background image url
    return dispatch(getBgImgDone(url))
  }
}
