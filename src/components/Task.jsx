import React, { useContext } from "react";
import { tasksContext } from "../context/tasks-context";
import "../styles/Task.css";

const Task = ({ task }) => {
  const { deleteTaskHandler,changeStatusHandler} = useContext(tasksContext);

  return (
    <div className="container-three">
      <li className="list">
        <p>{task.text}</p>
      </li>
      <button className="btnone" onClick={()=>changeStatusHandler(task.id)}> { task.isCompleted ? 'Active' : 'Inactive'} </button>
      <button className="btntwo" onClick={() => deleteTaskHandler(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
