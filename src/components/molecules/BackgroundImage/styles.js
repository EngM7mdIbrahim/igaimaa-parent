import { StyleSheet } from "react-native";
import { margin, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...padding(30,10,0,10),
    resizeMode: 'cover'
  },
  
});