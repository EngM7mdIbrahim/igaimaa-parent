import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import AimaaImage, {
  IMAGES_SIZES,
} from "_components/atoms/AimaaImage/index.jsx";
import { SECONDARY } from "_styles/colors.js";
import { borderRadius } from "_styles/mixins.js";
import images from "_images/images.js";

export default function BackgroundImage({
  style = {},
  backgroundColor = SECONDARY,
  noBottomRight = false,
  noBottomLeft = false,
  noTopRight = false,
  noTopLeft = false,
  borderValue = 5,
}) {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor,
        ...borderRadius(
          !noTopLeft,
          !noTopRight,
          !noBottomRight,
          !noBottomLeft,
          borderValue
        ),
        ...style,
      }}
    >
      <AimaaImage
        imageName={images.user_card_avatars}
        style={{
          width: "90%",
          height: 200,
          resizeMode: "cover",
          aspectRatio: undefined,
        }}
      />
    </View>
  );
}
