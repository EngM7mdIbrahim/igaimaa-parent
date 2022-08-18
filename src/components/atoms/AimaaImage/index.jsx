import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles.js";
import images from "_images/images.js";

export const IMAGES_SIZES = {
  FULL: "98%",
  EXTRA_LARG: 400,
  LARGE: 300,
  MEDIUM: 100,
  X_MEDIUM: 70,
  SMALL: 50,
  EXTRASMALL: 30,
};

export const getNextImageSize = (size, next) => {
  let imageSize = size;
  let prevImageSize = IMAGES_SIZES.FULL;
  while (next !== 0) {
    for (const currImageSizeKey in IMAGES_SIZES) {
      const currImageSize = IMAGES_SIZES[currImageSizeKey];
      console.log(currImageSize);
      if (imageSize >= currImageSize) {
        imageSize = prevImageSize;
        break;
      } else {
        prevImageSize = currImageSize;
      }
    }
    next--;
  }
  console.log(imageSize);
  return imageSize;
};

export default function AimaaImage({
  style = {},
  imageName = images.test,
  size = IMAGES_SIZES.FULL,
  isRounded = false,
}) {
  const imageSource =
    typeof imageName === "string" ? { uri: imageName } : imageName;
  const rounded = isRounded ? styles.rounded : {};
  return (
    <Image
      style={{
        width: size,
        ...styles.container,
        ...rounded,
        ...style,
      }}
      source={imageSource}
    />
  );
}
