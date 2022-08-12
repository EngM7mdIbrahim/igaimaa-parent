import { StyleSheet } from "react-native";
import { border, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    minHeight: 50,
    ...padding(10, 10, 10, 10),
    flexDirection: "column",
  },
  scrollView: {
    ...padding(10, 10, 10, 10),
    ...border()
  },
});
