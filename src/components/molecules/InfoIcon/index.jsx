import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import AimaaImage, {
  IMAGES_SIZES,
} from "_components/atoms/AimaaImage/index.jsx";
import { margin } from "_styles/mixins.js";
import AimaaLabel, { LABEL_TYPES } from "_components/atoms/AimaaLabel/index.jsx";

export default function InfoIcon({
  style = {},
  text = "No text passed here! - InfoIcon",
  imageName = undefined,
  isFull = true,
}) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <AimaaImage
      style={{...margin(10,0,10,0)}}
        imageName={imageName}
        size={isFull ? IMAGES_SIZES.SCALE_100 : IMAGES_SIZES.SCALE_15}
      />
      <AimaaLabel isBold type={isFull ? LABEL_TYPES.SUB_TITLE : LABEL_TYPES.SUB_PAR}>{text}</AimaaLabel>
    </View>
  );
}
