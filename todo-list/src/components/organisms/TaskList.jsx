import Task from "../molecules/Task";
import "./organisms.css";

export default function TaskList({
  inputRef,
  tasksArray = [],
  handleChangeTask = () => {},
  handleDeleteTask = () => {},
}) {
  const deleteTask = (id) => {
    handleDeleteTask(id);
  };

  const toggleTask = (id) => {
    const task = tasksArray[id];
    handleChangeTask(
      {
        ...task,
        isChecked: !task.isChecked,
      },
      id
    );
  };

  const editTask = (id, task) => {
    inputRef.current.id = id;
    inputRef.current.value = task.name;
  };

  return (
    <div>
      {tasksArray.map((task, id) => {
        return (
          <Task
            key={id}
            task={task}
            editTask={() => {
              editTask(id, task);
            }}
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
