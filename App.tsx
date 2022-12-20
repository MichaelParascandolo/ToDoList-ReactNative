import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Task from "./components/Task";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [task, setTask] = useState<string>();
  const [taskItems, setTaskItems] = useState<any>([]);

  // adds a task
  const addTask = () => {
    if (task != null && task.trim() != "") {
      Keyboard.dismiss();
      // setTaskItems([...taskItems, task.trim()]);
      taskItems.push(task.trim());
      setTask("");
    }
  };
  // "deletes" the current task
  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  // deletes all tasks from the list
  const deleteAll = () => {
    Alert.alert("Delete All", "Are you sure???", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        // style: "cancel",
      },
      { text: "Delete All", onPress: () => setTaskItems([]) },
    ]);
  };

  // used for testing
  useEffect(() => {
    setTaskItems([...taskItems, "Task 1", "Task 2"]);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EE2D2D" barStyle={"light-content"} />
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <View style={styles.header}>
            <Text style={styles.sectionTitle}>Today's Tasks</Text>
            <View
              style={taskItems.length > 0 ? styles.square : styles.squareZero}
            >
              <Text style={styles.squareNumber}>{taskItems.length}</Text>
            </View>
          </View>
          {taskItems.length == 0 ? (
            <Text style={styles.noTasks}>No Tasks</Text>
          ) : null}

          <View style={styles.items}>
            {/* This is where the tasks will go! */}

            {/* <Task text={"Task 1"} num={1} />
            <Task text={"Task 2"} num={2} />
            <Task text={"Task 3"} num={3} /> */}

            {taskItems.map((item: any, index: number) => {
              return (
                // <TouchableOpacity
                //   key={index}
                //   onPress={() => completeTask(index)}
                // >
                <Task
                  text={item}
                  num={index}
                  completeTask={() => completeTask(index)}
                />
                // {/* </TouchableOpacity> */}
              );
            })}
          </View>
        </View>
      </ScrollView>
      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Enter a task . . ."}
          placeholderTextColor={"#5F5F5F"}
          value={task}
          maxLength={50}
          onChangeText={(e) => setTask(e)}
        />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {taskItems.length > 0 ? (
        <Text style={styles.deleteAll} onPress={() => deleteAll()}>
          Delete All
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    // backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
  },
  sectionTitle: {
    fontSize: 34,
    // fontWeight: "bold",
    color: "#E5E7EB",
    letterSpacing: 3,
    // fontFamily: "Raleway",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#EE2D2D",
    // backgroundColor: "#59F472",
    opacity: 0.8,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  squareZero: {
    width: 24,
    height: 24,
    backgroundColor: "#59F472",
    opacity: 0.8,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  squareNumber: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    marginBottom: 100,
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#282828",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1.5,
    width: "80%",
    height: 50,
    // width: 300,
    color: "#E5E7EB",
    fontSize: 18,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#282828",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1.5,
    // shadow shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  addText: {
    color: "#EE2D2D",
    fontSize: 35,
  },
  deleteAll: {
    color: "#EE2D2D",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 35,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  noTasks: {
    color: "#5F5F5F",
    fontSize: 18,
    letterSpacing: 2,
    textAlign: "center",
    marginTop: "70%",
  },
});
