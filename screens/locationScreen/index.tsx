import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LocationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
