import { StyleSheet } from "react-native";
import { padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    borderRadius: 1000
  },
  image: {
    ...padding(10, 10, 10),
    position: "relative",
    bottom: -20,
  },
});
