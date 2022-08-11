import { View, Text, Touchable } from "react-native";
import React from "react";
import styles from "./styles.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import AimaaLabel, { LABEL_TYPES } from "../AimaaLabel/index.jsx";
import { PRIMARY } from "_styles/colors.js";

export default function AimaaButton({
  children = "No text here - AimaaButton",
  onClick = () => console.error("No onClick handler passed! - AimaaButton"),
  color = PRIMARY,
}) {
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: color }}
      onPress={onClick}
    >
      <AimaaLabel isBold type={LABEL_TYPES.PAR} isWhite>
        {children}
      </AimaaLabel>
    </TouchableOpacity>
  );
}
