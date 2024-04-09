import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UnorderedList({ items }) {
  return (
    <View style={styles.listContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {},
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  bullet: {
    width: 10, // Width of the bullet
    marginRight: 5, // Spacing between the bullet and text
  },
  itemText: {
    flex: 1, // Ensures text takes the remaining width
  },
});
