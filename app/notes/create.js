import { StyleSheet, Text, TextInput, View } from "react-native";
import Btn from "../../lib/components/Btn";
import { useContext, useState } from "react";
import { NotesContext } from "../../lib/contexts/NotesContext";
import { router } from "expo-router";

export default function CreateNote() {
  const [input, setInput] = useState();
  const { notes, setNotes } = useContext(NotesContext);

  const addNote = () => {
    setNotes([...notes, input]);
    router.back();
  };

  return (
    <View style={styles.ctr}>
      <Text style={{ marginTop: 12 }}>Create Note</Text>
      <TextInput
        multiline
        numberOfLines={8}
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <Btn onPress={addNote} text="Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 200,
    width: "90%",
    padding: 12,
    marginVertical: 24,
  },
});
