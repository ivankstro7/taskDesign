import React from "react";
import { Header } from './components/header/header';
import { Title } from './components/Title/Title';
import { TaskContainer } from './components/TodoList/task';
import { TodoContext, TodoProvider } from "./todoContext";
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Title
        text='Task list with css in react.js'
        paragraph='¡Aprende React.js, la librería más popular de JavaScript para crear aplicaciones web interactivas! 
        Trabaja con componentes, propiedades, estado y efectos.'    
      />
      <TodoProvider>
        <TaskContainer />
      </TodoProvider> 
    </React.Fragment>
  );
}

export default App;
