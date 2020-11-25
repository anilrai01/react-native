import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
    const [todo, setTodo] = useState([
        {
            title: 'Washing Clothes',
            id: '0'
        },
        {
            title: 'Continue 2D Unity Project',
            id: '1'
        },
        {
            title: 'Complete React Native Tuts',
            id: '2'
        }
    ]);

    return (
        <TodoContext.Provider value={[todo, setTodo]}>
            {props.children}
        </TodoContext.Provider>
    )
}