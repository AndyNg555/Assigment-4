import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)} // Update taskText state
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(taskText); // Call addTask with the current taskText
          setTaskText(''); // Clear the input field after adding the task
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
  },
});
