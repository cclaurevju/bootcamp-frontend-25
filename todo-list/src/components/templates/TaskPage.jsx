import TaskForm from "../molecules/TaskForm";
import TaskList from "../organisms/TaskList";
import "./templates.css";
import { useState } from "react";

// task = {
//   name: String,
//   isChecked: boolean
// }

const mockTasks = [
  {
    name: "First task",
    isChecked: false,
  },
  {
    name: "Second task",
    isChecked: true,
  },
];

export default function TaskPage() {
  const [tasks, setTasks] = useState(mockTasks);

  const addTask = (name) => {
    setTasks([
      ...tasks,
      {
        name: name,
        isChecked: false,
      },
    ]);
  };

  return (
    <div>
      <h1>Prague itinerary</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasksArray={tasks} setTasksArray={setTasks} />
    </div>
  );
}
