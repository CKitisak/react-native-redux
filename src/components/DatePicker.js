import React, { Component } from 'react'
import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
  DatePickerAndroid,
  Platform,
  Keyboard
} from 'react-native'
import moment from 'moment'

class DatePicker extends Component {
  constructor (props) {
    super(props)

    // this.state = {
    //   date:
    // }

    this._getDate = this._getDate.bind(this)
    this._openPicker = this._openPicker.bind(this)
  }

  _getDate (date = this.props.date) {
    const { minDate, maxDate, format } = this.props

    if (!date) {
      let now = moment().valueOf()

      if (minDate) {
        let _minDate = moment(minDate, format).valueOf()
        if (now < _minDate) {
          return _minDate
        }
      }

      if (maxDate) {
        let _maxDate = moment(maxDate, format).valueOf()
        if (now > _maxDate) {
          return _maxDate
        }
      }

      return now
    }

    if (date instanceof Date) {
      return date
    }

    return moment(date, format).toDate()
  }

  _openPicker () {
    Keyboard.dismiss()

    DatePickerAndroid
      .open({
        date: this._getDate(),
        minDate: this.props.minDate,
        maxDate: this.props.maxDate,
        mode: 'default'
      })
      .then(({ action, year, month, day }) => {
        if (action === DatePickerAndroid.dismissedAction) {
          // do something on cancel
          console.log('on cancel')
        } else {
          // do something on confirm
          console.log('on confirm', action, year, month, day)
          if (typeof this.props.onChangeDate === 'function') {
            this.props.onDateChange(moment(year, month, day).format(this.props.format))
          }
        }
      })
  }

  render () {
    let { date, placeholder } = this.props
    return (
      <TouchableHighlight
        onPress={ this._openPicker }
        underlayColor='transparent'
      >
        <View style={{ marginBottom: 10 }}>
          { (!date || date === '') &&
            <Text style={{ color: '#ccc', fontSize: 16, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 10 }}>
              { placeholder }
            </Text>
          }
          { (date || date !== '') &&
            <Text style={{ fontSize: 16, borderWidth: 1, paddingVertical: 8, paddingHorizontal: 10 }}>
              { date }
            </Text>
          }
        </View>
      </TouchableHighlight>
    )
  }
}

export default DatePicker
