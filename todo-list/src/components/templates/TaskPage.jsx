import TaskForm from "../molecules/TaskForm";
import TaskList from "../organisms/TaskList";
import "./templates.css";
import { useReducer, useRef } from "react";

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
  const [tasks, dispatch] = useReducer(tasksReducer, mockTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      text: text,
    });
  }

  function handleChangeTask(task, id) {
    dispatch({
      id: id,
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  function tasksReducer(tasks, action) {
    if (action.type === "added") {
      return [
        ...tasks,
        {
          name: action.text,
          isChecked: false,
        },
      ];
    } else if (action.type === "changed") {
      console.log("ACTION", action);

      return tasks.map((t, index) => {
        if (index == action.id) {
          return action.task;
        } else {
          return t;
        }
      });
    } else if (action.type === "deleted") {
      return tasks.filter((t, index) => index !== action.id);
    } else {
      throw Error("Unknown action: " + action.type);
    }
  }

  const inputRef = useRef({ id: "" });

  const addTask = (name) => {
    if (!inputRef.current.id) {
      handleAddTask(name);
    } else {
      const id = parseInt(inputRef.current.id);
      const currentTask = tasks[id];
      console.log(id, currentTask);

      handleChangeTask(
        {
          ...currentTask,
          name: name,
        },
        id
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
        handleChangeTask={handleChangeTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
