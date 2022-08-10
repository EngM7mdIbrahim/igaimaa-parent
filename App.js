import { StyleSheet, Text, View } from 'react-native';
import AimaaLabel from '_atoms/AimaaLabel';

export default function App() {
  return (
    <View style={styles.container}>
      <AimaaLabel>Hello</AimaaLabel>
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
