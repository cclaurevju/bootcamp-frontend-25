import TaskForm from "../molecules/TaskForm";
import TaskList from "../organisms/TaskList";
import "./templates.css";
import { useRef, useState } from "react";

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
  const inputRef = useRef({ id: "" });
  const [tasks, setTasks] = useState(mockTasks);
  // const [currentTaskId, setCurrentTaskId] = useState(null);

  const addTask = (name) => {
    if (!inputRef.current.id) {
      setTasks([
        ...tasks,
        {
          name: name,
          isChecked: false,
        },
      ]);
    } else {
      setTasks(
        tasks.map((task, index) => {
          if (index == inputRef.current.id) {
            return {
              name: inputRef.current.value,
            };
          }
          return task;
        })
      );
    }
  };

  return (
    <div>
      <h1>Prague itinerary</h1>
      <TaskForm inputRef={inputRef} onSubmit={addTask} />
      <TaskList
        inputRef={inputRef}
        tasksArray={tasks}
        setTasksArray={setTasks}
      />
    </div>
  );
}
