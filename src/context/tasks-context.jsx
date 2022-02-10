import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const tasksContext = createContext({
  tasks: [],
  deleteTaskHandler: () => {},
  handleSubmit: () => {},
  register: () => {},
  onSubmit: () => {},
  addTaskHandler: () => {},
  changeStatusHandler: () => {},
});

export const TasksContextProvider = ({ children }) => {
  const tasksHook = useTasks();

  return (
    <tasksContext.Provider value={tasksHook}>{children}</tasksContext.Provider>
  );
};
