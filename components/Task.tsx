import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Remove from "./Remove";

const Task = ({
  text,
  num,
  completeTask,
}: {
  text: string;
  num: number;
  completeTask: any;
}) => {
  const [complete, setComplete] = useState(false);

  // const renderRightActions = (
  //   progress: Animated.AnimatedInterpolation,
  //   dragAnimatedValue: Animated.AnimatedInterpolation,
  // ) => {
  //   const opacity = dragAnimatedValue.interpolate({
  //     inputRange: [-150, 0],
  //     outputRange: [1, 0],
  //     extrapolate: 'clamp',
  //   });

  return (
    <>
      {/* <Motion.View animate={{}}> */}
      <Swipeable>
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={!complete ? styles.square : styles.squareComplete}>
                {!complete ? (
                  <Text style={styles.number}>{num + 1}</Text>
                ) : (
                  <TouchableOpacity onPress={completeTask}>
                    <Text style={styles.number}>X</Text>
                  </TouchableOpacity>
                )}
              </View>
              <Text
                style={!complete ? styles.itemText : styles.itemTextCompleted}
              >
                {text}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setComplete(!complete)}>
              <View style={!complete ? styles.circle : styles.circleFilled}>
                {complete ? <Text style={{ fontSize: 10 }}>✔</Text> : null}
              </View>
            </TouchableOpacity>
          </View>
          {/* <Remove completeTask={() => completeTask(num)} /> */}
        </View>
      </Swipeable>
      {/* </Motion.View> */}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#282828",
    padding: 15,
    borderRadius: 10,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 1.5,
    //
    // width: "87%",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  container: {
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#1380FE",
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
    // fontFamily: "Lato",
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
    borderColor: "#1380FE",
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
    alignItems: "center",
    justifyContent: "center",
  },
  // delete button
  deleteButton: {},
  deleteButtonText: {},
});

export default Task;
