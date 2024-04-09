import { StyleSheet, Text, View } from "react-native";

export default function Purpose() {
  return (
    <View style={styles.container}>
      <Text>Made it to purpose page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
