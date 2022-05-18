import React from 'react';
import { TodoContext } from '../../todoContext';
import { HeaderTask } from './HeaderTask';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './task.css';

function TaskContainer() {
  return (
    <div className='container-task'>
      <HeaderTask/>
      <TodoSearch/>

      <TodoContext.Consumer>
      {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}                
                user='ivan castro'
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
    </div>
  );
}
  
export { TaskContainer };