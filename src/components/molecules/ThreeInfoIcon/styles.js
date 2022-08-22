import { StyleSheet } from "react-native";
import { tint } from "tint-shade-color";
import { PRIMARY } from "_styles/colors";
import { margin, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: 'row',
    width: '100%',
    minHeight: 90,
    borderRadius: 5,
    backgroundColor: tint(PRIMARY,0.95),
    ...padding(5, 5,5,5),
    ...margin(5,5,5,5),
  },
});