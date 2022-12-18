import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const Task = ({ text, num }: { text: string; num: number }) => {
  const [complete, setComplete] = useState(false);
  const completed = () => {
    setComplete(!complete);
  };

  return (
    <Swipeable>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={!complete ? styles.square : styles.squareComplete}>
            <Text style={styles.number}>{num}</Text>
          </View>
          <Text style={!complete ? styles.itemText : styles.itemTextCompleted}>
            {text}
          </Text>
        </View>
        <TouchableOpacity onPress={completed}>
          <View style={!complete ? styles.circle : styles.circleFilled}></View>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#282828",
    // backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 1.5,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#EE2D2D",
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 15,
  },
  squareComplete: {
    width: 24,
    height: 24,
    backgroundColor: "#59F472",
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 15,
  },
  number: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  itemText: {
    color: "#E5E7EB",
    maxWidth: "80%",
    fontSize: 18,
    letterSpacing: 2,
  },
  itemTextCompleted: {
    color: "#8C8C8C",
    maxWidth: "80%",
    fontSize: 18,
    letterSpacing: 2,
    textDecorationLine: "line-through",
  },
  circle: {
    width: 20,
    height: 20,
    borderColor: "#EE2D2D",
    borderWidth: 2,
    borderRadius: 5,
  },
  circleFilled: {
    width: 20,
    height: 20,
    borderColor: "#59F472",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#59F472",
  },
});

export default Task;
