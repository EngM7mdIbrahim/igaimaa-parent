import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import AvatarIcon from "../AvatarIcon/index.jsx";
import AimaaLabel, {
  LABEL_TYPES,
} from "_components/atoms/AimaaLabel/index.jsx";
import { margin } from "_styles/mixins.js";
import AimaaButton from "_components/atoms/AimaaButton/index.jsx";

export default function NewUserCard({
  style = {},
  onClick = () => console.error("No on click handler passed! - NewUserCard"),
}) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <AvatarIcon style={{ ...margin(10, 0, 10, 0) }} />
      <AimaaLabel
        style={{ ...margin(10, 0, 10, 0) }}
        type={LABEL_TYPES.SUB_SUB_TITLE}
      >
        Add Son / Daughter
      </AimaaLabel>
      <AimaaButton onClick={onClick}>Add</AimaaButton>
    </View>
  );
}
