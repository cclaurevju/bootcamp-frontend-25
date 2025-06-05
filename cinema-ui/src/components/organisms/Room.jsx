import SeatsGrid from "../molecules/SeatsGrid";
import "./organisms.css";

export default function Room({ roomData = { roomNumber: "N/A", seats: [] } }) {
  const roomNumber = roomData.roomNumber;
  const seats = roomData.seats;
  return (
    <div className="room">
      <div className="room-number">
        <h2>Room {roomNumber}</h2>
      </div>
      <div className="room-screen">
        <p>SCREEN</p>
      </div>
      <div>
        <SeatsGrid seats={seats} />
      </div>
    </div>
  );
}
