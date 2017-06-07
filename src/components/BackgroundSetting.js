import React, { PropTypes } from 'react'
import { View, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

// Component
// ___________________________________
const BackgroundSetting = ({ changeBgImg, deleteBgImg }) => (
  <View style={ styles.buttonGroup }>
    <Button
      title='Change Background'
      onPress={() => changeBgImg() }
    />
    <Button
      title='Dlete Background'
      onPress={() => deleteBgImg() }
    />
  </View>
)

// Defined type of props
// ___________________________________
BackgroundSetting.propTypes = {
  changeBgImg: PropTypes.func.isRequired,
  deleteBgImg: PropTypes.func.isRequired
}

export default BackgroundSetting
