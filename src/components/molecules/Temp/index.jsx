import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles.js'

export default function Temp({style = {}}) {
  return (
    <View style={{...styles.container,...style}}>
      <Text>Temp</Text>
    </View>
  )
}