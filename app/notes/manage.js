import { useContext } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { NotesContext } from "../../lib/contexts/NotesContext";
import { router } from "expo-router";

export default function ManageNotes() {
  const notes = useContext(NotesContext);
  return (
    <View style={styles.ctr}>
      <Text>Manage Notes Page</Text>
      <View>
        {notes?.length &&
          notes.map((n, i) => (
            <View key={`n_${i}`}>
              <Text>{n}</Text>
            </View>
          ))}
      </View>
      <TouchableOpacity
        style={styles.btn}
        title="Refresh"
        onPress={() => router.push("/notes/create")}
      >
        <Text style={{ fontSize: 18, color: "white" }}>Add Note</Text>
      </TouchableOpacity>
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
