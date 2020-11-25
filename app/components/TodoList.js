import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback } from 'react-native'

import { TodoContext } from './../context/TodoContext';
import { MaterialIcons } from "@expo/vector-icons";

const TodoList = () => {
    const [todo, setTodo] = useContext(TodoContext);

    const handleTodoDel = (data) =>{
        console.log(data);
        Alert.alert("Confirmation", `Are you sure you want to delete: ${data.title} ?`, [
            {text: "Yes", onPress: () => setTodo(todo.filter(el => el.id !== data.id))},
            {text: "No", onPress: () => {}}
        ]);
    }
    return (
        // <ScrollView style={styles.container}>
        // {
        //     todo.map(el => <Text key={el.id} style={styles.todo}>{el.title}</Text>)
        // }
        // </ScrollView>
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{paddingBottom: 30}}
                keyExtractor={(item) => item.id}
                data={todo}
                renderItem = {({item}) => <View style={styles.todo}>
                    <Text>{item.title}</Text>
                    <TouchableWithoutFeedback onPress={() => handleTodoDel(item)} >
                        <MaterialIcons name="delete" size={24} color="red" />
                    </TouchableWithoutFeedback>
                </View>}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    todo: {
        padding: 10,
        marginVertical: 7,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#aaa",
        borderStyle: 'dotted',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
 
export default TodoList;