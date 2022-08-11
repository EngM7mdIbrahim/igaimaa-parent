import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import { PRIMARY, WHITE } from "_styles/colors.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
import AimaaImage, { IMAGES_SIZES } from "../AimaaImage/index.jsx";
import { border } from "_styles/mixins.js";

export default function AimaaIcontButton({
  iconType = "material",
  iconName = "error",
  iconColor = WHITE,
  onClick = () =>
    console.error("No onClick handler passed! - AimaaIcontButton"),
  color = PRIMARY,
  isInline = false,
}) {
  const dynamicStyle = isInline
    ? { ...border(color), backgroundColor: WHITE }
    : { backgroundColor: color };
  const newIconColor = isInline ? color : iconColor;
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...dynamicStyle }}
      onPress={onClick}
    >
      {typeof iconName === "string" ? (
        <Icon
          containerStyle={{ ...styles.icon }}
          size={styles.icon.width}
          color={newIconColor}
          solid
          type={iconType}
          name={iconName}
        />
      ) : (
        <AimaaImage imageName={iconName} type={IMAGES_SIZES.SMALL} />
      )}
    </TouchableOpacity>
  );
}
