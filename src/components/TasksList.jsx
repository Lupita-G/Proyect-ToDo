import React, { useContext } from "react";
import "../styles/TasksList.css";
import Task from "./Task";
import { tasksContext } from "../context/tasks-context";

const Taskslist = () => {
  const { tasks} = useContext(tasksContext);

  return (
    <div className="container-two">
      {tasks.map((task) => (
        <Task key={task.id} task={task}/>
      ))}
    </div>
  );
};

export default Taskslist;
