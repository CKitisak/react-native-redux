import React from 'react'
import { Text, View } from 'react-native'

import ContactForm from '../containers/ContactForm'

const App = () => (
  <View style={{ flex: 1, padding: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
      Redux Form Validation
    </Text>
    <ContactForm />
  </View>
)

export default App
