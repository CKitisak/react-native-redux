import React from 'react'
import { Text } from 'react-native'

import I18n from '../i18n'

const TextTranslate = ({ text, option, style }) => {
  return (
    <Text style={{ ...style }}>
      { I18n.t(text, option) }
    </Text>
  )
}

export default TextTranslate
