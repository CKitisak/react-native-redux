import React from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import validate from './validate'
import asyncValidate from './asyncValidate'

const MyInput = props => {
  const { input, meta, ...inputProps } = props
  const formStates = ['active', 'autofilled', 'asyncValidating', 'dirty', 'invalid', 'pristine',
    'submitting', 'touched', 'valid', 'visited']
  return (
    <View>
      <TextInput
        {...inputProps}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      <Text>The { input.name} input is:</Text>
      {
        formStates
          .filter((state) => meta[state])
          .map((state) => {
            return <Text key={state}> - { state }</Text>
          })
      }
    </View>
  )
}

const MyForm = props => {
  const { handleSubmit } = props
  return (
    <View keyboardShouldPersistTaps={'handled'}>
      <Text>My Input</Text>
      <Field name='myInput1' component={ MyInput } />
      <Field name='myInput2' component={ MyInput } />

      <TouchableOpacity onPress={ handleSubmit }>
        <Text>Submit!</Text>
      </TouchableOpacity>
    </View>
  )
}

MyForm = reduxForm({
  form: 'myForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['myInput2', 'myInput1'],
  shouldAsyncValidate: (params) => {
    return params.trigger === 'blur' && params.syncValidationPasses; // do not async validate on submit
  }
})(MyForm)

export default MyForm
