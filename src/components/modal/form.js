import React from "react";
import { TodoContext } from "../../todoContext";
import './form.css'

function FormModal () {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [newTodoUser, setNewTodoUser] = React.useState('')
  const {
    addTodo,
    setOpenModal,
  }=React.useContext(TodoContext);

  const onChangeUser = (event) => {
    setNewTodoUser(event.target.value);
  };

  const onChangeTask = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return(
    <form className="form-modal" onSubmit={onSubmit}>
      <h3>Add new task</h3>
      <div className="form-input">
        <label>Assign task to:</label>
        <input placeholder="select user" value={newTodoUser} onChange={onChangeUser}></input>
      </div>
      <div className="form-input">
        <label>Describe task</label>
        <textarea placeholder="Task detail" value={newTodoValue} onChange={onChangeTask}></textarea>
      </div>
      <div className="form-buttons">
        <button className="btn-stroke" type="button" onClick={onCancel}>Cancel</button>
        <button className="btn-primary" type="submit">Create task</button>
      </div>
    </form>
  );
}

export { FormModal }
