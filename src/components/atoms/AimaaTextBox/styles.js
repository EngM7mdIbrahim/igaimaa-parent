import { StyleSheet } from "react-native";
import { tint } from "tint-shade-color";
import { PRIMARY } from "_styles/colors";

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: tint(PRIMARY, 0.3)
  },
});