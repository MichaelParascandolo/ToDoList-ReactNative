import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Remove = ({ completeTask }: { completeTask: any }) => {
  return (
    <>
      <TouchableOpacity onPress={completeTask}>
        <View style={styles.removeWrapper}>
          <Text style={styles.removeText}>x</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  removeWrapper: {
    width: 35,
    height: 55,
    backgroundColor: "#282828",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1.5,
    //shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  removeText: {
    color: "#1380FE",
    fontSize: 35,
  },
});

export default Remove;
