import Task from "../molecules/Task";
import "./organisms.css";

export default function TaskList({
  tasksArray = [],
  setTasksArray = () => {},
}) {
  const deleteTask = (id) => {
    setTasksArray(
      tasksArray.filter((task, index) => {
        return index != id;
      })
    );
  };

  const toggleTask = (id) => {
    setTasksArray(
      tasksArray.map((task, index) => {
        if (index == id) {
          return {
            name: task.name,
            isChecked: !task.isChecked,
          };
        }
        return task;
      })
    );
  };

  const EditTask = () => {};

  return (
    <div>
      {tasksArray.map((task, id) => {
        return (
          <Task
            key={id}
            task={task}
            deleteTask={() => {
              deleteTask(id);
            }}
            toggleTask={() => {
              toggleTask(id);
            }}
          />
        );
      })}
    </div>
  );
}
