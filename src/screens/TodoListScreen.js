import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../../redux/actions/todos';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoListScreen = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editItemId, setEditItemId] = useState(null);
  const [editItemText, setEditItemText] = useState('');

  const renderItem = ({ item }) => {
    const { id, description, completed, timestamp } = item;
    const isEditing = editItemId === id;

    const handleToggle = () => {
      dispatch(toggleTodo(id));
    };

    const handleDelete = () => {
      dispatch(deleteTodo(id));
    };

    const handleEdit = () => {
      setEditItemId(id);
      setEditItemText(description);
    };

    const handleSave = () => {
      if (editItemText.trim() !== '') {
        dispatch(updateTodo({
          id,
          description: editItemText,
          completed
        }));
        setEditItemId(null);
      }
    };

    const handleCancel = () => {
      setEditItemId(null);
      setEditItemText('');
    };

    return (
      <TouchableOpacity
        style={{
          backgroundColor: completed ? '#e0e0e0' : '#ffffff',
          padding: 10,
          marginVertical: 5,
          borderRadius: 5,
        }}
        onPress={handleToggle}
        onLongPress={handleDelete}
      >
        {isEditing ? (
          <TextInput
            value={editItemText}
            onChangeText={setEditItemText}
            autoFocus
            style={styles.textInput}
          />
        ) : (
          <View style = {styles.container}>
            <View>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{timestamp}</Text>
            </View>
            <View>
            <Text style={{ color: completed ? 'green' : 'red' }}>
                {completed ? 'Completed' : 'Pending'}
            </Text>
            <TouchableOpacity onPress={handleDelete}>
                <AntDesign name="delete" size={24} color="red" />
            </TouchableOpacity>
            </View>
          </View>
        )}

        {isEditing ? (
          <View style={styles.buttonContainer}>
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={handleCancel} />
          </View>
        ) : (
          <Button title="Edit" onPress={handleEdit} />
        )}
      </TouchableOpacity>
    );
  };


  return (
    <View style={{ flex: 1, padding: 10 }}>
        <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={<Text>No todos</Text>}
        />
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({ 
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    description: { 
        flex: 1, 
        marginRight: 16 
    },
    buttonContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-evenly' 
    },
    text: {
        color: '#000',
    },
    textInput: { 
        marginBottom: 10, 
        padding: 10, 
        borderColor: '#ccc',
        borderWidth: 1,
        color: '#000'    
    }
});