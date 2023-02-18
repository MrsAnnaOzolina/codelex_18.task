import axios from 'axios';
import { useState } from 'react';
import { ITodo } from '../components/types';

type Props = {
    todo: ITodo;
      updateTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
  
      const checkTodo: string = todo.status ? `line-through` : '';

    return (
        <div key={todo.id}
            className="uk-card-secondary"
            style={{width:"400px", marginBottom: "20px"}}
        >
            <div 
                className="uk-card-body"
            >
                <h5
                className='.uk-card-title'
                > {todo.title}: </h5>
                <p
                style={todo.status ? {textDecoration:"line-through"} : {textDecoration:"none"}}
                >{todo.description}</p>
                   <p>{todo.date}</p>
                <button 
                className='Card--buttons uk-button uk-button-default'
               
                  onClick={() => {
                    updateTodo(todo._id); window.location.reload();}} 
                    style={todo.status ? {display:"none"} : {marginRight: "5px"}}
                >
                    Complete
                </button>
                <button 
                className='uk-button uk-button-default'
                id={todo._id}
                onClick={(e)=> {
                  const toDelete:string = e.currentTarget.id
                //   console.log(toDelete)
                    axios.delete(`http://localhost:3004/todolist/${toDelete}`)
                window.location.reload();
                }
                }
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
export default Todo;