import { StyleSheet } from "react-native";
import { border, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    width: 100,
    ...padding(10,10,10,10),
    alignContent:'center',
    justifyContent: 'center', 
    borderRadius: 20,
  },
});