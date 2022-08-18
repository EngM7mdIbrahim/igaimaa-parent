import { StyleSheet } from "react-native";
import { shade, tint } from "tint-shade-color";
import { BLACK, WHITE } from "_styles/colors";
import { border, borderRadius, boxShadow, margin, padding } from "_styles/mixins";

export default StyleSheet.create({
  container: {
    width: 300,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    ...borderRadius(5),
    ...boxShadow(BLACK),
    backgroundColor: shade(WHITE,0.03),
    ...padding(0,0,10,0),
    ...margin(10,10,10,10)
  },
  topContainer: {
    width: '100%',
    ...margin(0,0,'20%',0)
  },
  profile: {
    position: 'absolute',
    bottom: '-30%',
    alignSelf: 'center',
    ...margin(0,'auto',0,'auto')
  }
});