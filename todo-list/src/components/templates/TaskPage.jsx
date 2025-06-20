import TaskForm from "../molecules/TaskForm";
import TaskList from "../organisms/TaskList";
import "./templates.css";
import { useReducer, useRef, useState } from "react";

// task = {
//   name: String,
//   isChecked: boolean
// }

const mockTasks = [
  {
    // id: 1,
    name: "First task",
    isChecked: false,
  },
  {
    // id: 2,
    name: "Second task",
    isChecked: true,
  },
];

export default function TaskPage() {
  const [tasks, dispatch] = useReducer(tasksReducer, mockTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      // id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task, id) {
    dispatch({
      // id: id,
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
          // id: action.id,
          name: action.text,
          isChecked: false,
        },
      ];
    } else if (action.type === "changed") {
      return tasks.map((t, index) => {
        if (index === action.id) {
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
  // const [tasks, setTasks] = useState(mockTasks);
  // const [currentTaskId, setCurrentTaskId] = useState(null);

  const addTask = (name) => {
    if (!inputRef.current.id) {
      handleAddTask(name);
      // setTasks([
      //   ...tasks,
      //   {
      //     name: name,
      //     isChecked: false,
      //   },
      // ]);
    } else {
      const id = parseInt(inputRef.current.id);
      const currentTask = tasks[id];
      console.log(id, currentTask);

      handleChangeTask(
        {
          ...currentTask,
          name: currentTask.name,
        },
        id
      );
      // setTasks(
      //   tasks.map((task, index) => {
      //     if (index == inputRef.current.id) {
      //       return {
      //         name: inputRef.current.value,
      //       };
      //     }
      //     return task;
      //   })
      // );
    }
  };

  return (
    <div>
      <h1>Prague itinerary</h1>
      <TaskForm inputRef={inputRef} onSubmit={addTask} />
      <TaskList
        inputRef={inputRef}
        tasksArray={tasks}
        // setTasksArray={setTasks}
        handleChangeTask={handleChangeTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
