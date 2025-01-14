import { Button, ScrollView, StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.ctr}>
        <Link href="/purpose" style={styles.card}>
          Purpose
        </Link>
        {/* <Button
          onPress={() => console.log("-- bytton pressed")}
          title="Purpose"
        /> */}
        <Link href="/navigation" style={styles.card}>
          Navigation
        </Link>
        <Link href="/ye" style={styles.card}>
          Kanye West Quote Generator
        </Link>
        <Link href="/barhop" style={styles.card}>
          Build a Barhop
        </Link>
        <Link href="/notes/manage" style={styles.card}>
          Manage Notes
        </Link>
        <Link href="/animations" style={styles.card}>
          Animations
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ctr: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 20,
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
