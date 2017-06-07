export const changeBgImg = () => ({
  type: 'CHANGE_BACKGROUND_IMAGE',
  url: 'https://unsplash.it/500?random=1&t=' + Date.now()
})

export const deleteBgImg = () => ({
  type: 'DELETE_BACKGROUND_IMAGE'
})

export const getBgImg = () => ({
  type: 'GET_BACKGROUND_IMAGE'
})