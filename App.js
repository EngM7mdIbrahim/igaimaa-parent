import { StyleSheet, Text, View } from 'react-native';
import AimaaLabel, { LABEL_TYPES } from '_atoms/AimaaLabel';
import AimaaTextBox from '_components/atoms/AimaaTextBox';

export default function App() {
  return (
    <View style={styles.container}>
      <AimaaTextBox/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
