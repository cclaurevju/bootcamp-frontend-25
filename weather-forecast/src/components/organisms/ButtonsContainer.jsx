import Button from "../atoms/Button";
import "./organisms.css";

export default function ButtonsContainer({ history, search }) {
  return (
    <div className="buttons-container">
      {history.map((city, index) => {
        return <Button key={index} onClick={() => search(city)} label={city} />;
      })}
    </div>
  );
}
