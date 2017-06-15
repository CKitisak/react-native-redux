import React from 'react'
import { connect } from 'react-redux'
import { Picker, Text } from 'react-native'

import { switchLanguage } from '../actions/translation'

const LanguagePicker = ({ currentLanguage, languages, isFetching, isError, onSelectedLanguage }) => {
  console.log(!isError , !currentLanguage , !languages)
  if (isError || !currentLanguage || !languages) {
    return <Text>Something went wrong!</Text>
  }
  if (isFetching) {
    return <Text>Fetching languages...</Text>
  }

  let languageKeys = Object.keys(languages)
  let languageItems = languageKeys.map((key, index) => (
    <Picker.Item
      key={ index }
      value={ key }
      label={ languages[key]._name }
    />
  ))

  return (
    <Picker
      selectedValue={ (currentLanguage || deviceLocale) }
      onValueChange={ (item, index) => onSelectedLanguage(item) }
    >
      { languageItems }
    </Picker>
  )
}

const mapState = (state) => ({
  currentLanguage: state.translation.currentLanguage || state.translation.deviceLocale,
  languages: state.translation.languages,
  isFetching: state.translation.isFetching,
  isError: state.translation.isError
})

const mapDispatch = (dispatch) => ({
  onSelectedLanguage: (language) => {
    dispatch(switchLanguage(language))
  }
})

LanguagePicker = connect(mapState, mapDispatch)(LanguagePicker)

export default LanguagePicker
