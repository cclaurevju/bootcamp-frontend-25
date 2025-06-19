import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import "./molecules.css";

export default function Task({
  task,
  toggleTask = () => {},
  editTask = () => {},
  deleteTask = () => {},
}) {
  return (
    <div className="task">
      <Checkbox
        onChange={toggleTask}
        checked={task.isChecked}
        label={task.name}
      />
      <Button onClick={() => editTask(task.id)}>Edit</Button>
      <Button onClick={() => deleteTask(task.id)}>Delete</Button>
    </div>
  );
}
