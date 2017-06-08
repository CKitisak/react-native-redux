import React, { PropTypes } from 'react'
import { Image, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  }
})

// Component
// ___________________________________
const Background = ({ bgImg, isFetching, children }) => {
  if (isFetching) {
    return <Text>Loading...</Text>
  }
  return (
    <Image
      style={ styles.backgroundImage }
      source={{ uri: bgImg }}
    >
      { children }
    </Image>
  )
}

// Defined type of props
// ___________________________________
Background.propTypes = {
  bgImg: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default Background
