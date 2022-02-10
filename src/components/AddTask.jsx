import React, { useContext } from "react";
import "../styles/AddTask.css";
import { tasksContext } from "../context/tasks-context";

const Addtask = () => {
  const { handleSubmit, onSubmit, register} = useContext(tasksContext);

  return (
    <form className="container-one" onSubmit={handleSubmit(onSubmit)}>
      <h1>ToDo List</h1>
      <input type="text" placeholder="Add new todo" {...register('text', { required: true })} />
      <button>Submit</button>
    </form>
  );
};

export default Addtask;
 