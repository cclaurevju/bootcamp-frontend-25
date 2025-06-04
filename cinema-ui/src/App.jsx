import { useState } from "react";
import "./App.css";
import Seat from "./components/atoms/Seat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Seat />
    </>
  );
}

export default App;
