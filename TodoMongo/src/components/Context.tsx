import * as React from 'react';
import { useEffect, useState ,createContext, useContext} from 'react'
import axios from 'axios';
import {ITodo,TodoContextType } from "./types"

export const TodoContext = React.createContext< TodoContextType | null>(null);

const TodoContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>();
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get("http://localhost:3004/todolist");
      setTodos(res)
    };
    getPosts();
    
  }, []);

  const updateTodo = (_id: string) => {
    axios.put(`http://localhost:3004/todolist/${_id}`)
  }
  
  const saveTodo = (todo: ITodo) => {
    axios.post("http://localhost:3004/todolist",{
        title:todo.title,
        description: todo.description,
    })
  }

  return <TodoContext.Provider value={{todos, updateTodo, saveTodo}}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;

