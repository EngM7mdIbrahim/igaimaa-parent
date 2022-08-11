import { StyleSheet } from "react-native";
import { shade, tint } from "tint-shade-color";
import { PRIMARY, SECONDARY } from "_styles/colors";
import { border, margin, padding, scaleFont } from "_styles/mixins";

const HEIGHT = 40;
export default StyleSheet.create({
  container: {
    borderRadius: 5,
    width: "90%",
    height: HEIGHT,
    flexDirection: "row",
    backgroundColor: tint(PRIMARY, 0.9),
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: HEIGHT - 10,
    height: HEIGHT - 10,
    ...margin(0, 0, 0, 10),
  },
  textBox: {
    height: HEIGHT - 10,
    flex: 1,
    ...margin(0,10,0,10),
    color: SECONDARY,

  },
});
