import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import "./molecules.css";

export default function Task({
  task,
  editTask = () => {},
  deleteTask = () => {},
}) {
  return (
    <div>
      <Checkbox label={task.name} />
      <Button onClick={() => editTask(task.id)}>Edit</Button>
      <Button onClick={() => deleteTask(task.id)}>Delete</Button>
    </div>
  );
}
