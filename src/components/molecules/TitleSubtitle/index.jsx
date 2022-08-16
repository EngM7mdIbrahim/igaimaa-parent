import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import AimaaLabel from "_components/atoms/AimaaLabel/index.jsx";
import { border } from "_styles/mixins.js";

export const TITLES_TYPES = {
  LARGE: 2,
  MED: 3,
  SMALL: 4,
};
export default function TitleSubtitle({
  style = {},
  title = "No title passed - TitleSubtitle",
  subtitle = "No subtitle passed - TitleSubtitle",
  boldTitle = true,
  boldSubtitle = false,
  type = TITLES_TYPES.MED,
  align = "center",
}) {
  const newAlign =
    align === "left" ? "flex-start" : align === "right" ? "flex-end" : align;
  return (
    <View style={{ ...styles.container, alignItems: newAlign, ...style }}>
      <AimaaLabel type={type} isBold={boldTitle}>
        {title}
      </AimaaLabel>
      <AimaaLabel type={type + 1} isBold={boldSubtitle}>
        {subtitle}
      </AimaaLabel>
    </View>
  );
}
