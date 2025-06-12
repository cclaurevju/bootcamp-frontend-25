import { useState } from "react";

import Button from "../atoms/Button";
import "./organisms.css";
import ButtonsContainer from "./ButtonsContainer";

const mockWeatherData = {
  "New York": {
    temperature: "22°C",
    humidity: "56%",
    windSpeed: "15 km/h",
  },
  "Los Angeles": {
    temperature: "27°C",
    humidity: "45%",
    windSpeed: "10 km/h",
  },
  London: {
    temperature: "15°C",
    humidity: "70%",
    windSpeed: "20 km/h",
  },
};

export default function Container() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [history, setHistory] = useState([]);

  const search = (inputCity) => {
    const result = mockWeatherData[city];
    if (result) {
      setData(result);
      setHistory([...history, city]);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <Button
          label="Clear"
          onClick={() => {
            setCity("");
            setHistory([]);
            setData({});
          }}
        />
        <Button
          label="Search"
          onClick={() => {
            search(city);
          }}
        />
      </div>
      <ButtonsContainer history={history} search={search} />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
