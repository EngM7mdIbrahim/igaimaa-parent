import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles.js'
import BackgroundImage from '../BackgroundImage/index.jsx'
import AvatarIcon from '../AvatarIcon/index.jsx'
import { IMAGES_SIZES } from '_components/atoms/AimaaImage/index.jsx'

export default function UserCard({style = {}}) {
  return (
    <View style={{...styles.container,...style}}>
      <BackgroundImage noBottomLeft noBottomRight/>
      <AvatarIcon size={IMAGES_SIZES.X_MEDIUM}/>
    </View>
  )
}