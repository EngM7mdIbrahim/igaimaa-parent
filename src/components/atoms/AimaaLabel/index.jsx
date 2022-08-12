import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Typography, Mixins } from "_styles/index";
import { BLACK, PRIMARY, WHITE } from "_styles/colors";

export const LABEL_TYPES = {
  TITLE: 1,
  SUB_TITLE: 2,
  SUB_SUB_TITLE: 3,
  PAR: 4,
  SUB_PAR: 5,
};

export default function AimaaLabel({
  textAlign = "left",
  style = {},
  children,
  isBold = false,
  isBlack = false,
  isWhite = false,
  type = LABEL_TYPES.TITLE,
}) {
  let fontSize = Typography.FONT_SIZE_52;
  switch (type) {
    case LABEL_TYPES.SUB_TITLE:
      fontSize = Typography.FONT_SIZE_32;
      break;
    case LABEL_TYPES.SUB_SUB_TITLE:
      fontSize = Typography.FONT_SIZE_24;
      break;
    case LABEL_TYPES.PAR:
      fontSize = Typography.FONT_SIZE_16;
      break;
    case LABEL_TYPES.SUB_PAR:
      fontSize = Typography.FONT_SIZE_12;
      break;
  }

  let font = isBold ? Typography.FONT_BOLD : Typography.FONT_REGULAR;
  let color = isBlack ? BLACK : PRIMARY;
  color = isWhite ? WHITE : color;
  return (
    <View>
      <Text
        style={{
          color,
          fontSize,
          textAlign,  
          ...font,
          ...styles.container,
          ...style,
        }}
      >
        {children}
      </Text>
    </View>
  );
}
