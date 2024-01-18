import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"get the work done",
            completed:false,
        }
    ],

    addTodo : (todo) =>{},
    deleteTodo : (id) =>{},
    updateTodo : (id,todo) =>{},
    toggleComplete : (id)=>{}
});

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider