import  { useState} from "react";
import {Todo} from "../todo/todo";
import * as React from 'react';


export const TodoContext = React.createContext();
export const TodoProvider = (props) => {
    const [tasks, setTasks] = useState([
    ]);
    return(
        <TodoContext.Provider value={{tasks, setTasks}}>
            {props.children}
        </TodoContext.Provider>
    );
};