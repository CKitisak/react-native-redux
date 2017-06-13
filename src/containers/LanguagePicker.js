import React from 'react'
import { connect } from 'react-redux'
import { Picker, Text } from 'react-native'

import I18n from '../i18n'
import { switchLanguage } from '../actions/translation'

const LanguagePicker = ({ currentLanguage, isLoading, onSelectedLanguage }) => {
  if (isLoading) {
    return <Text>fetching languages...</Text>
  }

  let languages = Object.keys(I18n.translations)
  let languageItems = languages.map((language, index) => (
    <Picker.Item
      key={ index }
      value={ language }
      label={ I18n.translations[language]._name }
    />
  ))

  return (
    <Picker
      selectedValue={ currentLanguage }
      onValueChange={ (item, index) => onSelectedLanguage(item) }
    >
      { languageItems }
    </Picker>
  )
}

const mapState = (state) => ({
  currentLanguage: state.translation.currentLanguage,
  isLoading: state.translation.isLoading
})

const mapDispatch = (dispatch) => ({
  onSelectedLanguage: (language) => {
    dispatch(switchLanguage(language))
  }
})

LanguagePicker = connect(mapState, mapDispatch)(LanguagePicker)

export default LanguagePicker
