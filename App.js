import { StyleSheet, Text, View } from "react-native";
import AimaaImage, { IMAGES_SIZES } from "_components/atoms/AimaaImage";

export default function App() {
  return (
    <View style={styles.container}>
      <AimaaImage
        isRounded
        size={IMAGES_SIZES.SMALL}
      />
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
