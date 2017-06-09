import realm from '../models'

const appStyle = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_STYLE':
      return Object.assign({}, action.styles)
    case 'SAVE_STYLE':
      let styles = {
        id: 'main',
        styles: JSON.stringify(action.styles),
        updatedDate: action.updatedDate
      }
      // keep todo in realmDB
      realm.write(() => {
        realm.create('StyleSheet', styles, true)
      })

      return styles
    default:
      return state
  }
}

export default appStyle
