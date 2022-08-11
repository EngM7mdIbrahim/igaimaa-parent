import { StyleSheet, Text, View } from "react-native";
import AimaaImage, { IMAGES_SIZES } from "_components/atoms/AimaaImage";
import AimaaStatusTag from "_components/atoms/AimaaStatusTag";
import { ALERT, INFO, SECONDARY, WARNING } from "_styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
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
