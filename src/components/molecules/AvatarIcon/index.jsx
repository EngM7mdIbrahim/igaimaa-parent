import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import AimaaImage, { IMAGES_SIZES } from "_components/atoms/AimaaImage/index.jsx";
import images from "_images/images.js";
import { PRIMARY } from "_styles/colors.js";

export default function AvatarIcon() {
  return (
    <View style={{...styles.container, backgroundColor: PRIMARY}}>
      <AimaaImage
        style={{ ...styles.image }}
        size={IMAGES_SIZES.MEDIUM}
        imageName={images.user_card_avatars}
      />
    </View>
  );
}
