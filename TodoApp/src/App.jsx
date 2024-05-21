import { useState, useEffect } from 'react'
import {TodoContextProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos]= useState([]);

  const addTodo= (todo)=> {
    setTodos((oldTodos)=> [{id: Date.now(), ...todo}, ...oldTodos]);
  }

  const updateTodo= (id,todo)=> {
    setTodos((oldTodos)=> 
      oldTodos.map((eachTodo)=> (eachTodo.id === id ? todo : eachTodo)))
  }

  const deleteTodo= (id)=> {
    setTodos((oldTodos)=> 
      oldTodos.filter((eachVal)=> eachVal.id !==id));
  }

  const toggleTodo= (id)=> {
    setTodos((oldTodos)=> 
      oldTodos.map((prevTodos)=> prevTodos.id===id ? {...prevTodos, todoCheked: !prevTodos.todoCheked} : prevTodos))
  }


  useEffect(()=> {
    const todos= JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0)
      {
        setTodos(todos);
      }
  }, [])

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo,toggleTodo}} >
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                        
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App