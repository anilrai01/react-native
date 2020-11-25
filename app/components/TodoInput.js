import React, { createRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

import { Ionicons } from "@expo/vector-icons";
import { TodoContext } from './../context/TodoContext';

const TodoInput = () => {
    const [task, setTask] = React.useState('');
    const [todo, setTodo] = React.useContext(TodoContext);
    const myTodoInput = createRef();

    const handleTodoAdd = () => {
        setTodo([{id: String(Date.now()), title: task}, ...todo ]);
        myTodoInput.current.clear();
    }


    return ( 
        <View style={styles.container}>
            <TextInput ref={myTodoInput} style={styles.textInput} placeholder="Your Task" onChangeText={(val) => setTask(val)} />
            <TouchableOpacity style={styles.addBtn} onPress={() => handleTodoAdd()}>
                <Ionicons style={{marginHorizontal: 5}} name="ios-add" size={22} color="white" />
                <Text style={{color: "#fff"}}>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    textInput: {
        backgroundColor: '#eee',
        borderColor: 'rgba(0,0,0,0.5)',
        padding: 10
    },
    addBtn: {
        width: '100%',
        padding: 10,
        color: '#fff',
        backgroundColor: "#2a9df4",
        marginVertical: 10,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TodoInput;