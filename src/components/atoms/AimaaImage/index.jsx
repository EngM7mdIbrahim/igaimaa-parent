import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles.js";
import images from "_images/images.js";

export const IMAGES_SIZES = {
  FULL: '98%',
  LARGE: '50%',
  MEDIUM: '30%',
  SMALL: '20%'
}

export default function AimaaImage({
  imageName = images.test,
  size=IMAGES_SIZES.FULL,
  isRounded = false
}) {
  const imageSource =
    typeof imageName === "string" ? { uri: imageName } : imageName;
  const rounded = isRounded ? styles.rounded : {}
  return (
    <Image
      style={{
        width: size,
        ...styles.container,
        ...rounded
      }}
      source={imageSource}
    />
  );
}
