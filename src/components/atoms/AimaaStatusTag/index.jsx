import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import { SUCCESS } from "_styles/colors.js";
import AimaaLabel, { LABEL_TYPES } from "../AimaaLabel/index.jsx";
import { padding } from "_styles/mixins.js";

export default function AimaaStatusTag({
  style = {},
  color = SUCCESS,
  children = "No text here - AimaaStatusTag",
}) {
  let labelType = LABEL_TYPES.PAR;
  let paddingNo = 5;
  if (children.length > 10) {
    labelType++;
    paddingNo = 10;
  }
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: color,
        ...padding(paddingNo),
        ...style,
      }}
    >
      <AimaaLabel textAlign="center" isWhite isBold type={labelType}>
        {children}
      </AimaaLabel>
    </View>
  );
}
