import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import { SUCCESS } from "_styles/colors.js";
import AimaaLabel, { LABEL_TYPES } from "../AimaaLabel/index.jsx";

export default function AimaaStatusTag({
  color = SUCCESS,
  children = "No text here - AimaaStatusTag",
}) {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <AimaaLabel textAlign="center" isWhite isBold type={LABEL_TYPES.PAR}>
        {children}
      </AimaaLabel>
    </View>
  );
}
