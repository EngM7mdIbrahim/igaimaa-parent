import { StyleSheet, Text, View } from "react-native";
import AimaaButton from "_components/atoms/AimaaButton";
import AimaaFilterTag from "_components/atoms/AimaaFilterTag";
import AimaaIcontButton from "_components/atoms/AimaaIconButton";
import AimaaImage, { IMAGES_SIZES } from "_components/atoms/AimaaImage";
import AimaaStatusTag from "_components/atoms/AimaaStatusTag";
import AvatarIcon from "_components/molecules/AvatarIcon";
import FilterList from "_components/molecules/FilterList";
import OptionItem from "_components/molecules/OptionItem";
import images from "_images/images";
import { ALERT, BLACK, INFO, PRIMARY, SECONDARY, WARNING } from "_styles/colors";
import { border, WINDOW_HEIGHT, WINDOW_WIDTH } from "_styles/mixins";

export default function App() {
  return (
    <View style={styles.container}>
      <FilterList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    minHeight: WINDOW_HEIGHT,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    ...border('#ff0000')
  },
});
