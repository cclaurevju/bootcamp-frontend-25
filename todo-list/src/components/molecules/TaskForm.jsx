import { useRef } from "react";
import Input from "../atoms/Input";
import "./molecules.css";
import Button from "../atoms/Button";

export default function TaskForm({ onSubmit = () => {} }) {
  const inputRef = useRef(null);

  const addTask = () => {
    const value = inputRef.current.value;
    if (value) {
      onSubmit(value);
    }
  };

  return (
    <div>
      <Input ref={inputRef} placeholder={"Add task"} />
      <Button onClick={addTask} />
    </div>
  );
}
