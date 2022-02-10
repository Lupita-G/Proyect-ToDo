import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TasksContextProvider } from "./context/tasks-context";


ReactDOM.render(
  <React.StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
