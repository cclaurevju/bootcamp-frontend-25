import { useState } from "react";
import Room from "../organisms/Room";
import "./template.css";

export default function Cinema() {
  const [actualRoom, setActualRoom] = useState(0);

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

  const goPrevRoom = () => {
    setActualRoom((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  const goNextRoom = () => {
    setActualRoom((prev) => {
      if (prev < rooms.length - 1) return prev + 1;
      return prev;
    });
  };

  return (
    <div className="cinema-layout">
      <div>
        <button onClick={goPrevRoom}>Previous</button>
      </div>
      <Room roomData={rooms[actualRoom]} />
      <div>
        <button onClick={goNextRoom}>Next</button>
      </div>
    </div>
  );
}
