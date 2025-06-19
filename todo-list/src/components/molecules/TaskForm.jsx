import Input from "../atoms/Input";
import "./molecules.css";
import Button from "../atoms/Button";

export default function TaskForm({ inputRef, onSubmit = () => {} }) {
  const addTask = () => {
    const value = inputRef.current.value;
    if (value) {
      onSubmit(value);
      inputRef.current.id = "";
      inputRef.current.value = "";
      inputRef.current.focus;
    } else alert("You should enter a task");
  };

  return (
    <div>
      <Input ref={inputRef} placeholder={"Add task"} />
      <Button onClick={addTask}>Save</Button>
    </div>
  );
}
