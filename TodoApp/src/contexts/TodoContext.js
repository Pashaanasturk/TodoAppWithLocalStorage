import { createContext, useContext } from "react";

export const TodoContext= createContext({
    todos: [
        {
            todoId:1,
            todoTitle:"Todo msg",
            todoCheked: false,
        }
    ],

    todoTheme: "dark",
    addTodo: (todo)=> {},
    updateTodo: (id, todo)=> {},
    deleteTodo: (id)=> {},
    toggleTodo: (id)=> {}
})

export const TodoContextProvider= TodoContext.Provider;

export const useTodo= ()=> {
    return useContext(TodoContext);
}

