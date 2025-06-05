import seatImg from "../../assets/seat.svg";
import "./atoms.css";

export default function Seat({ isAvailable = true, seatNumber = "N/A" }) {
  return (
    <div className="seat">
      <p className="seat-number">{seatNumber}</p>
      <div
        className={`seat-icon-container seat-${
          isAvailable ? "available" : "occuped"
        }`}
      ></div>
    </div>
  );
}
