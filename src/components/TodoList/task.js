import React from 'react';
import { HeaderTask } from './HeaderTask';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const todos = [
  { text: 'Take course intro to react.js', completed: true },
  { text: 'pass everything to a style sheet in Heredium-App', completed: false },
  { text: 'Buy marriage shoes', completed: false },
];

function TaskContainer() {
    return (
      <div className='container-task'>
        <HeaderTask 
          title='To do'
          subtitle='you have completed 2 of 3 tasks'
        />
        <TodoSearch />

        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} user='ivan castro' completed={todo.completed}/>
          ))}
        </TodoList>
      </div>
    );
  }
  
  export { TaskContainer };