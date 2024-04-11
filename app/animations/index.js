import { Text, View, StyleSheet } from "react-native";
import FadeInView from "../../lib/components/FadeInView";

export default function Animations() {
  return (
    <View>
      <FadeInView>
        <Text>Animation Page</Text>
      </FadeInView>
      <View style={styles.pongCtr}>
        <View style={styles.ball} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pongCtr: {
    height: 200,
    width: "100%",
    backgroundColor: "rgba(180, 0, 0, 0.5)",
    marginVertical: 24,
  },
  ball: {
    height: 20,
    width: 20,
    borderRadius: "50%",
    backgroundColor: "violet",
  },
});
