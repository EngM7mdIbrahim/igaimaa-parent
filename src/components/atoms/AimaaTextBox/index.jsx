import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import { TextInput } from "react-native";
import { Icon } from "@rneui/themed";
import { PRIMARY, SECONDARY } from "_styles/colors.js";
import { FONT_SIZE_52 } from "_styles/typography.js";
import { tint } from "tint-shade-color";

export default function AimaaTextBox({
  value = "",
  iconName = "search",
  iconType = "material",
  placeHolder = "No Placeholder here! - AimaaTextBox",
  onChange = (newValue) =>
    console.error("No onChange handler passed - AimaaTextBox", newValue),
}) {
  return (
    <View style={styles.container}>
      {iconName !== "" && (
        <Icon
          containerStyle={{ ...styles.icon }}
          size={styles.icon.width}
          color={PRIMARY}
          solid
          type={iconType}
          name={iconName}
        />
      )}
      <TextInput
        autoFocus
        value={value}
        autoCorrect={false}
        autoComplete={false}
        style={styles.textBox}
        placeholder={placeHolder}
        placeholderTextColor={`${tint(SECONDARY, 0.7)}`}
        onChangeText={onChange}
      />
    </View>
  );
}
