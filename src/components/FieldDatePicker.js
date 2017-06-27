import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import DatePicker from 'react-native-datepicker'

const FieldDatePicker = props => {
  const { input, meta, style, ...inputProps } = props
  const { width } = Dimensions.get('window')
  return (
    <View>
      <DatePicker
        { ...inputProps }
        style={{ width: width - 20, ...style }}
        date={ input.value }
        onDateChange={ input.onChange }
        mode='date'
        format='DD/MM/YYYY'
        minDate='01/01/2017'
        maxDate='31/12/2017'
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        showIcon={ false }
        customStyles={{
          dateInput: {
            borderColor: '#000',
          },
          placeholderText: {
            alignSelf: 'flex-start',
            paddingVertical: 5,
            paddingHorizontal: 10
          },
          dateText: {
            alignSelf: 'flex-start',
            paddingVertical: 5,
            paddingHorizontal: 10
          }
        }}
      />

      { ((meta.visited || meta.dirty) && meta.invalid) &&
        <Text style={{ color: '#f00', fontSize: 12 }}>
          { meta.error }
        </Text>
      }
    </View>
  )
}

export default FieldDatePicker
