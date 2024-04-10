/**
 * Contrived example of context that shouldn't actually be context.
 */
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NotesContext } from "../../lib/contexts/NotesContext";
import { router } from "expo-router";
import Btn from "../../lib/components/Btn";

export default function ManageNotes() {
  const { notes } = useContext(NotesContext);
  return (
    <View style={styles.ctr}>
      <Text>Manage Notes Page</Text>
      <View>
        {notes?.length > 0 &&
          notes.map((n, i) => (
            <View key={`n_${i}`}>
              <Text>{n}</Text>
            </View>
          ))}
      </View>
      <Btn text="Add Note" onPress={() => router.push("/notes/create")} />
    </View>
  );
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
  },
  btn: {
    position: "absolute",
    bottom: 60,
    paddingVertical: 24,
    width: "90%",
    backgroundColor: "#EE8434",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
