import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "./styles";
import UnorderedList from "../components/UnorderedList";

export default function Purpose() {
  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.h1}>Welcome!</Text>
      <Text style={GlobalStyles.p}>
        My name is Julian. I've a Fullstack developer seeking my next big
        product opportunity. My main goal is to find a product I'm excited to
        work on with the team and resources to build something we can all be
        genuinely proud of.
      </Text>
      <Text style={GlobalStyles.br} />
      <Text style={GlobalStyles.p}>
        This application serves a couple purposes:
      </Text>
      <UnorderedList
        items={[
          "Dust off my RN cobwebs",
          "See what's new in the Expo & RN world",
          "Demonstrate some of my dev patterns and tendencies (RN specific and otherwise)",
          "Have some fun & try some new things",
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
