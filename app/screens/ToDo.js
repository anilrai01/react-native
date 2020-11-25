import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native'
import TodoInput from '../components/TodoInput';
import TodoList from './../components/TodoList';

const ToDo = () => {
    return ( 
        <View style={styles.container}>
            <Image source={{
                length: '100%',
                uri: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
            }}
            style={{flex: 2.5}}/>
            <View style={styles.welcomeMsg}>
                <Text style={{color: "#fff", fontWeight: 'bold', fontSize: 16}}>React Native Todo Application!</Text>
            </View>
            <View style={styles.inputAndList}>
                <TodoInput />
                <TodoList />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
    },
    welcomeMsg: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        backgroundColor: '#1e90ff',
        color: "#fff",
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    inputAndList: {
        flex: 7,
        padding: 20,
    }
})
 
export default ToDo;