import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import AimaaImage, {
  getNextImageSize,
  IMAGES_SIZES,
} from "_components/atoms/AimaaImage/index.jsx";
import images from "_images/images.js";
import { PRIMARY } from "_styles/colors.js";

export default function AvatarIcon({
  style = {},
  size = IMAGES_SIZES.MEDIUM,
  imageName = undefined,
}) {
  return !imageName ? (
    <View style={{ ...styles.container, backgroundColor: PRIMARY, ...style }}>
      <AimaaImage
        style={{ ...styles.image }}
        size={size}
        imageName={images.user_card_avatars}
      />
    </View>
  ) : (
    <AimaaImage
      imageName={imageName}
      size={getNextImageSize(size, 1)}
      isRounded
      style={style}
    />
  );
}
