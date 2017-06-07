import React, { PropTypes } from 'react'
import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  }
})

// Component
// ___________________________________
const Background = ({ bgImg, children }) => (
  <Image
    style={ styles.backgroundImage }
    source={{ uri: bgImg.url }}
  >
    { children }
  </Image>
)

// Defined type of props
// ___________________________________
Background.propTypes = {
  bgImg: PropTypes.object.isRequired
}

export default Background
