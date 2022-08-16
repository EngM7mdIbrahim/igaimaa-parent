import { StyleSheet } from "react-native";
import { border, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    ...padding(10,10,10,10),
    width: '100%'
  },
});