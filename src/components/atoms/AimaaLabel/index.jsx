import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { FONT_BOLD } from "_styles";
import { FONT_REGULAR } from "_styles";

export const LABEL_TYPES = {
  TITLE: 1,
  SUB_TITLE: 2,
  SUB_SUB_TITLE: 3,
  PAR: 4,
};

export default function AimaaLabel({
  style = {},
  children,
  isBold = true,
  type = LABEL_TYPES.TITLE,
}) {
  let className = "title";
  switch (type) {
    case LABEL_TYPES.SUB_TITLE:
      className = "subTitle";
      break;
    case LABEL_TYPES.SUB_SUB_TITLE:
      className = "subSubTitle";
      break;
    case LABEL_TYPES.PAR:
      className = "paragraph";
      break;
  }

  let font = isBold ? FONT_BOLD : FONT_REGULAR;
  return (
    <View>
      <Text
        style={{
          ...font,
          ...styles.container,
          ...styles[className],
          fontWeight: "700"
        }}
      >
        {children}
      </Text>
    </View>
  );
}
