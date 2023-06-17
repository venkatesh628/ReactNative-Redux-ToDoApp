import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions/todos';

const TodoForm = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (description.trim() !== '') {
      dispatch(
        addTodo({
          id: new Date().getTime().toString(),
          description,
          completed: false,
          timestamp: new Date().toLocaleString(),
        })
      );
      setDescription('');
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Enter task description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.textInput}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 10, 
        padding: 10, 
        borderColor: '#ccc', 
        borderWidth: 1,
    }
})
