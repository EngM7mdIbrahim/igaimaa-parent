import { StyleSheet } from "react-native";
import { tint } from "tint-shade-color";
import { PRIMARY } from "_styles/colors";
import { border, margin, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    minWidth: '45%',
    minHeight: 120,
    borderRadius: 5,
    backgroundColor: tint(PRIMARY,0.95),
    ...padding(20, 20, 20, 20),
    ...margin(5,5,5,5),
  },
});
