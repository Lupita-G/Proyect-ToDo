import React from "react";
import "./App.css";
import Addtask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="App">
      <Addtask />
      <TasksList />
    </div>
  );
}

export default App;
