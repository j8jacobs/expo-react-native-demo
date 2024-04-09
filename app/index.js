import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/purpose" style={styles.card}>
        Purpose
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  card: {
    width: "90%",
    height: 200,
    borderWidth: 1,
    margin: 12,
    padding: 12,
    borderRadius: 8,
  },
});
