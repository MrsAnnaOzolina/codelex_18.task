import * as React from 'react';
import { ITodo,TodoContextType } from '../components/types';
import { TodoContext } from '../components/Context';
import Todo from '../components/ToDo';


const Todos = () => {

  const {todos, updateTodo }  = React.useContext(TodoContext) as TodoContextType;
  return (
    <>
      {todos?.map((todo: ITodo) => (
        <Todo 
        key={todo._id}
        updateTodo={updateTodo} 
        todo={todo}
        />
      ))}
    </>
  );
};

export default Todos;