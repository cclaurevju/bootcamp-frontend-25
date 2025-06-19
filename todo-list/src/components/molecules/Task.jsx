import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import "./molecules.css";

export default function Task() {
  const editTask = () => {};

  const deleteTask = () => {};

  return (
    <div>
      <Checkbox label={"Task"} />
      <Button>Edit</Button>
      <Button>Delete</Button>
    </div>
  );
}
