import React, { useState } from "react";
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
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState<string>();
  const [taskItems, setTaskItems] = useState<any>([]);

  //test
  const handleAddTask = () => {
    if (task != null && task.trim() != "") {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task.trim()]);
      setTask("");
    } else {
      // alert("Enter a task");
    }
  };
  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const deleteAll = () => {
    Alert.alert("Delete All", "Are you sure you want to?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Delete All", onPress: () => setTaskItems([]) },
    ]);
  };

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
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          {taskItems.length == 0 ? (
            <Text style={styles.noTasks}>No Tasks 😊</Text>
          ) : null}

          <View style={styles.items}>
            {/* This is where the tasks will go! */}

            {/* <Task text={"Task 1"} num={1} />
            <Task text={"Task 2"} num={2} />
            <Task text={"Task 3"} num={3} /> */}

            {taskItems.map((item: any, index: number) => {
              return (
                <TouchableOpacity
                  key={index}
                  // onPress={() => completeTask(index)}
                >
                  <Task text={item} num={index + 1} />
                </TouchableOpacity>
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
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={styles.deleteAll} onPress={() => deleteAll()}>
        Delete All
      </Text>
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
  sectionTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#E5E7EB",
    letterSpacing: 3,
  },
  items: {
    marginTop: 30,
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
    borderRadius: 60,
    borderColor: "black",
    borderWidth: 1.5,
    width: "75%",
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
    width: 60,
    height: 60,
    backgroundColor: "#282828",
    borderRadius: 60,
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
  },
  noTasks: {
    color: "#E5E7EB",
    fontSize: 18,
    letterSpacing: 2,
    textAlign: "center",
    marginTop: "70%",
  },
});
