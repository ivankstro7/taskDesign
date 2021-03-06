import React from 'react';
import { TodoContext } from '../../todoContext';
import { HeaderTask } from './HeaderTask';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { Modal } from "../modal/modal";
import { FormModal } from '../modal/form';
import './task.css';

function TaskContainer() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    onChangeUser,
  } = React.useContext(TodoContext);
  return (
    <div className='container-task'>
      <HeaderTask
        setOpenModal={setOpenModal}
      />
      <TodoSearch/>      
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}                
            user='ivan castro'
            onChangeUser={onChangeUser}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <FormModal/>
        </Modal>
      )}
    </div>
  );
}
  
export { TaskContainer };
