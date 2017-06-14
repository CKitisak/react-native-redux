import React from 'react'
import { Text } from 'react-native'

import { translate } from '../i18n'

const TextTranslate = ({ text, style }) => {
  return (
    <Text style={{ ...style }}>
      { translate(text) }
    </Text>
  )
}

export default TextTranslate
