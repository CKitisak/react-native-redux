import React, { Component } from 'react'
import { Image, Text, TimePickerAndroid, TouchableOpacity, View } from 'react-native'

let now = new Date()
let timePickerResult = {
  hour: now.getHours(),
  minute: now.getMinutes()
}

const _openPicker = async () => {
  try {
    const { action, hour, minute } = await TimePickerAndroid.open({
      ...timePickerResult,
      is24Hour: true // If undefined, the default for the current locale is used
    });
    if (action !== TimePickerAndroid.dismissedAction) {
      timePickerResult = { hour, minute }
      console.log(timePickerResult)
    }
  } catch ({ code, message }) {
    console.warn('Cannot open time picker', message);
  }
}

const MyTimePicker = () => (
  <View style={{ padding: 10, backgroundColor: '#203f77' }}>
    <Text style={{ fontSize: 14, fontStyle: 'italic', color: '#eee' }}>
      MyTimePicker
    </Text>
    <TouchableOpacity onPress={ _openPicker }>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', flex: 1, color: '#fff' }}>
          { timePickerResult.hour + ' : ' + timePickerResult.minute}
        </Text>
        <Image
          source={{ uri: 'http://www.iconsdb.com/icons/preview/gray/time-12-xxl.png' }}
          style={{ width: 25, height: 25, padding: 10 }}
        />
      </View>
    </TouchableOpacity>
  </View>
)

export default MyTimePicker
