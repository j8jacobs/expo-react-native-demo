import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router/stack";
import { useState } from "react";
import { NotesContext } from "../lib/contexts/NotesContext";

export default function Layout() {
  const [notes, setNotes] = useState([]);
  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <StatusBar style="auto" />
      <Stack />
    </NotesContext.Provider>
  );
}
