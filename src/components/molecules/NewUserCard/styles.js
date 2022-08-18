import { StyleSheet } from "react-native";
import { shade, tint } from "tint-shade-color";
import { BLACK, WHITE } from "_styles/colors";
import { border, borderRadius, boxShadow, margin, padding } from "_styles/mixins";


export default StyleSheet.create({
  container: {
    width: 300,
    minHeight: 350,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    ...borderRadius(5),
    ...boxShadow(BLACK),
    backgroundColor: shade(WHITE,0.03),
    ...padding(0,0,10,0),
    ...margin(10,10,10,10)
  },
});