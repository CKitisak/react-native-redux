import React from 'react'
import { Text, TextInput, View } from 'react-native'

const FieldInput = props => {
  const { input, meta, style, ...inputProps } = props

  return (
    <View style={{ marginBottom: 10 }}>
      <TextInput
        { ...inputProps }
        style={{
          fontSize: 16,
          borderWidth: 1,
          paddingVertical: 5,
          paddingHorizontal: 10,
          ...style
        }}
        onChangeText={ input.onChange }
        onBlur={ input.onBlur }
        onFocus={ input.onFocus  }
        value={ input.value }
        placeholderTextColor='#ccc'
        underlineColorAndroid='transparent'
      />
      { ((meta.visited || meta.dirty) && meta.invalid) &&
        <Text style={{ color: '#f00', fontSize: 12 }}>
          { meta.error }
        </Text>
      }
    </View>
  )
}

export default FieldInput
