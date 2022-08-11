import { StyleSheet } from "react-native";
import { margin, padding } from "_styles/mixins";

const HEIGHT = 50;
export default StyleSheet.create({
  container: {
    width: HEIGHT,
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    ...padding(10, 10, 10, 10),
    borderRadius: 5,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: HEIGHT - 15,
    height: HEIGHT - 15,
    ...margin(0, 0, 0, 0),
  },
});
