import { StyleSheet } from "react-native";
import { margin, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...padding(5,10,5,10),
    ...margin(5,5,5,5),
    maxWidth: 300,
    minWidth: 50
  },
});