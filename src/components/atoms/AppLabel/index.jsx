import { View, Text } from 'react-native'
import React from 'react'

import styles from './Styles';

export const TEXT_TYPES = {
  TITLE: 1,
  SUB_TITLE: 2,
  SUB_SUB_TITLE: 3,
  PAR: 4
}

export default function Label({type = TEXT_TYPES.PAR, className=""}) {

  return (
    <View >
      <Text>Label</Text>
    </View>
  )
}

