import { StyleSheet, Text, View } from "react-native";
import AimaaButton from "_components/atoms/AimaaButton";
import AimaaFilterTag from "_components/atoms/AimaaFilterTag";
import AimaaIcontButton from "_components/atoms/AimaaIconButton";
import AimaaImage, { IMAGES_SIZES } from "_components/atoms/AimaaImage";
import AimaaStatusTag from "_components/atoms/AimaaStatusTag";
import images from "_images/images";
import { ALERT, BLACK, INFO, PRIMARY, SECONDARY, WARNING } from "_styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <AimaaFilterTag color={SECONDARY}>Test</AimaaFilterTag>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
