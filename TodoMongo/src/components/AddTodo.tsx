import * as React from 'react';
import { TodoContext } from '../components/Context';
import { ITodo,TodoContextType } from '../components/types';

const AddTodo: React.FC = () => {
  const { saveTodo } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
    // console.log(formData.description)
  };
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
    window.location.reload();
  };
  return (
    <form 
    className="uk-form" 
    onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <h5>Add new to do:</h5>
          <label 
          htmlFor="name"
           style={{margin:"20px"}}
           >Title</label>
          <input 
          style={{marginTop: "5px"}}
          className='uk-textarea'
          onChange={handleForm} type="text" id="title" />
          <label 
          htmlFor="description"
          style={{margin:"20px"}}
          >
            Description
            </label>
          <input 
             style={{marginTop: "5px"}}
          className='uk-textarea'
          onChange={handleForm} 
          type="text" 
          id="description" 
          />
      </div>
      <button 
      className='uk-button uk-button-primary'
      style={{margin:"20px"}}
      disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
};
export default AddTodo;