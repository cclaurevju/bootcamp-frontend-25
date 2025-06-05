import "./molecules.css";
import Seat from "../atoms/Seat";

export default function SeatsGrid({ seats = [] }) {
  return (
    <div className="seats-grid">
      {seats.map((row) => {
        return (
          <div className="seats-row">
            {row.map((seat) => {
              return (
                <Seat
                  seatNumber={seat.seatNumber}
                  isAvailable={seat.isAvailable}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
