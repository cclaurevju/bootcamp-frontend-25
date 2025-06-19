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

  const EditTask = () => {};

  return (
    <div>
      {tasksArray.map((task, i) => {
        return <Task />;
      })}
    </div>
  );
}
