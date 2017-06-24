import React from 'react'
import { Image, Slider, Switch, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { updateSlider, updateSwitch } from './actions'

import MyForm from './MyForm'

const App = ({
  sliderValue,
  sliderIconMinValue,
  sliderIconMaxValue,
  switchValue,
  temperature,
  quality,
  dispatch
}) => (
  <View style={{ padding: 25 }}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>
        Current Temperature:
      </Text>
      <Text style={{ marginLeft: 5, color: '#68c2cb', fontSize: 18, fontWeight: 'bold' }}>
        { temperature }
      </Text>
      <Text style={{ fontSize: 18, marginLeft: 20 }}>
        Current Air Quality:
      </Text>
      <Text style={{ marginLeft: 5, color: '#68c2cb', fontSize: 18, fontWeight: 'bold' }}>
        { quality }
      </Text>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <View style={{ height: 50, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Switch
          value={ switchValue }
          onValueChange={ (val) => {
            dispatch(updateSwitch(val))
          }}
          thumbTintColor='#68c2cb'
          disabled={ false }
        />
      </View>
      <View style={{ height: 50, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 40, height: 40 }}>
          <Image
            source={{ uri: sliderIconMinValue }}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Slider
            step={ 1 }
            minimumValue={ 1 }
            maximumValue={ 100 }
            value={ sliderValue }
            thumbTintColor='#68c2cb'
            onSlidingComplete={ (val) => {
              dispatch(updateSlider(val))
            }}
            disabled={ false }
          />
        </View>
        <View style={{ width: 40, height: 40 }}>
          <Image
            source={{ uri: sliderIconMaxValue }}
            style={{ width: 40, height: 40 }}
          />
        </View>
      </View>
      <View style={{ height: 50, width: 50, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color:'#68c2cb', fontSize: 20, fontWeight: 'bold' }}>
          { sliderValue }
        </Text>
      </View>
    </View>
    <MyForm />
  </View>
)

const mapState = state => ({
  sliderValue: state.settings.sliderValue,
  switchValue: state.settings.switchValue,
  temperature: state.settings.temperature,
  quality: state.settings.quality,
  sliderIconMinValue: state.settings.sliderIconMinValue,
  sliderIconMaxValue: state.settings.sliderIconMaxValue
})

App = connect(mapState)(App)

export default App
