import seatImg from "../../assets/seat.svg";
import "./atoms.css";

export default function Seat() {
  return (
    <div className="seat">
      <p className="seat-number">A1</p>
      <img className="seat-icon" src={seatImg} alt="seat" />
    </div>
  );
}
