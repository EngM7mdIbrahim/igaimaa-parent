import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import AimaaLabel, { LABEL_TYPES } from "../AimaaLabel/index.jsx";
import { PRIMARY } from "_styles/colors.js";
import { tint } from "tint-shade-color";

export default function AimaaFilterTag({
  children = "No text passed here! - AimaaFilterTag",
  color = PRIMARY,
  isSelected = false,
}) {
  const backgroundColor = isSelected ? color : tint(color, 0.9);
  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <AimaaLabel
        style={color !== PRIMARY ? { color } : {}}
        type={LABEL_TYPES.PAR}
        isWhite={isSelected}
      >
        {children}
      </AimaaLabel>
    </View>
  );
}
