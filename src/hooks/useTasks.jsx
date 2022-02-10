import { useState } from "react";
import { useForm } from "react-hook-form";

export const useTasks = () => {
  const tasksList = [
    { id: 1, text: "Read my new book", isCompleted: false },
    { id: 2, text: "Go to the park", isCompleted: false },
    { id: 3, text: "Finish my homework", isCompleted: false },
  ];

  const [tasks, setTasks] = useState(tasksList);
  const { handleSubmit, register } = useForm();

  const addTaskHandler = (newTask) => {
    console.log(newTask);
    const testTask = {
      id: crypto.randomUUID(),
      ...newTask,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, testTask]);
  };
  const onSubmit = (newTask) => {
    console.log(newTask);
    addTaskHandler(newTask);
  };

  const deleteTaskHandler = (taskId) => {
    console.log("taskId", taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const changeStatusHandler = (taskId) => {
    console.log(taskId);
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        } else {
          return task;
          /// {id: 1, text: '', isCompleted: false}
        }
      })
    );
    console.log("click");
  };

  return {
    tasks,
    deleteTaskHandler,
    handleSubmit,
    register,
    onSubmit,
    addTaskHandler,
    changeStatusHandler,
  };
};
