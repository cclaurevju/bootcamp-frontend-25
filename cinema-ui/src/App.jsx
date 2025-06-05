import { useState } from "react";
import "./App.css";
import Seat from "./components/atoms/Seat";
import SeatsGrid from "./components/molecules/SeatsGrid";

function App() {
  const cinemaSeats = Array.from({ length: 10 }, (_, row) =>
    Array.from({ length: 10 }, (_, col) => ({
      seatNumber: `${String.fromCharCode(65 + row)}${col + 1}`,
      isAvailable: (row + col) % 5 != 0,
    }))
  );

  return <SeatsGrid seats={cinemaSeats} />;
}

export default App;
