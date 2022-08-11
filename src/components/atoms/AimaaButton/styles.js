import { StyleSheet } from "react-native";
import { margin, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    minWidth: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...margin(10,10,10,10),
    ...padding(10,10,10,10),
    borderRadius: 5
  },
});