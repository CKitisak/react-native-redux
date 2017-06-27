import React from 'react'
import { Button, Text, ScrollView, View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import FieldInput from '../components/FieldInput'
import FieldDatePicker from '../components/FieldDatePicker'
import formValidate from '../formValidate'

const submit = values => {
  console.log('submitting form', values)
}

const ContactForm = ({ handleSubmit }) => (
  <ScrollView>
    <View>
      <Text style={{ fontWeight: 'bold' }}>
        Firstname
      </Text>
      <Field
        name='firstname'
        component={ FieldInput }
        placeholder='Kitisak'
      />
    </View>
    <View>
      <Text style={{ fontWeight: 'bold' }}>
        Lastname
      </Text>
      <Field
        name='lastname'
        component={ FieldInput }
        placeholder='Chaengsiri'
      />
    </View>
    <View>
      <Text style={{ fontWeight: 'bold' }}>
        Email
      </Text>
      <Field
        name='email'
        component={ FieldInput }
        keyboardType='email-address'
        placeholder='chaengsiri.k@gmail.com'
      />
    </View>
    <View>
      <Text style={{ fontWeight: 'bold' }}>
        Birthdate
      </Text>
      <Field
        name='birthdate'
        component={ FieldDatePicker }
        placeholder='23/11/1990'
      />
    </View>
    <View style={{ marginTop: 15 }}>
      <Button
        title='Submit'
        onPress={ handleSubmit(submit) }
      />
    </View>
  </ScrollView>
)

// Decorate the form component
ContactForm = reduxForm({
  form: 'contact',        // a unique name for this form
  validate: formValidate  // local validate
})(ContactForm)

export default ContactForm
