import { useEffect, useState } from "react";
import "./App.css";
import Seat from "./components/atoms/Seat";
import SeatsGrid from "./components/molecules/SeatsGrid";
import Room from "./components/organisms/Room";

function App() {
  const generateSeats = () => {
    return Array.from({ length: 10 }, (_, row) =>
      Array.from({ length: 10 }, (_, col) => ({
        seatNumber: `${String.fromCharCode(65 + row)}${col + 1}`,
        isAvailable: Math.random() < 0.8,
      }))
    );
  };

  const rooms = Array.from({ length: 5 }, (_, index) => ({
    roomNumber: index + 1,
    seats: generateSeats(),
  }));

  console.log(rooms);

  return <Room roomData={rooms[0]} />;
}

export default App;
