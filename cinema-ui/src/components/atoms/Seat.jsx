import seatImg from "../../assets/seat.svg";
import "./atoms.css";

export default function Seat({ isAvailable = true }) {
  return (
    <div className="seat">
      <p className="seat-number">A1</p>
      <div
        className={`seat-icon-container seat-${
          isAvailable ? "available" : "occuped"
        }`}
      ></div>
    </div>
  );
}
