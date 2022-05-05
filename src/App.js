import React from "react";
import { Header } from './components/header/header';
import { TodoCounter } from './components/TodoList/TodoCounter';
import { TodoSearch } from './components/TodoList/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoList/TodoItem';
import { CreateTodoButton } from './components/TodoList/CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Tomar curso basico de react', completed: true },
  { text: 'pasar todo a una hoja de estilos en Heredium-App', completed: false },
  { text: 'Comprar zapatos matrimonio', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <Header />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
