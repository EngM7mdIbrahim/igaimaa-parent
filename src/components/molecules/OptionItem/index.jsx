import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import AimaaImage, {
  IMAGES_SIZES,
} from "_components/atoms/AimaaImage/index.jsx";
import AimaaLabel, {
  LABEL_TYPES,
} from "_components/atoms/AimaaLabel/index.jsx";
import { border, margin, padding } from "_styles/mixins.js";

export default function OptionItem({
  text = "No text passed here! - OptionItem",
  style = {},
  isColumn = false
}) {
  return (
    <View style={{ ...styles.container, flexDirection: isColumn ? 'column': 'row',...style }}>
      <AimaaImage size={IMAGES_SIZES.SMALL} />

      <AimaaLabel
        style={{ ...margin(10, 10, 0, 10), }}
        isBold
        type={LABEL_TYPES.PAR}
      >
        {text}
      </AimaaLabel>
    </View>
  );
}
