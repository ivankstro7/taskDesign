import React from "react";
import { Header } from './components/header/header';
import { Title } from './components/Title/Title';
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
      <Title
        text='Task list with css in react.js'
        paragraph='¡Aprende React.js, la librería más popular de JavaScript para crear aplicaciones web interactivas! 
        Trabaja con componentes, propiedades, estado y efectos.'    
      />
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
