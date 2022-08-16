import { StyleSheet } from "react-native";
import { border, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    flex: 1,
    ...padding(10, 10, 10, 10),
    flexDirection: "column",
  },
  flatlist: {
    flexGrow:0,
    ...padding(10, 10, 10, 10),
  },
});
