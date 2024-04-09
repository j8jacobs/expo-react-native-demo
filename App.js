import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaProvider style={styles.frameContainer}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>Hello</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  frameContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
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
