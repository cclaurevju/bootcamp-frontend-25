import { useRef, useState } from "react";

import Button from "../atoms/Button";
import "./organisms.css";
import ButtonsContainer from "./ButtonsContainer";
import DataDisplayer from "../atoms/DataDisplayer";

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
  const [data, setData] = useState({});
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  const search = (inputCity) => {
    const result = mockWeatherData[inputCity];

    if (result) {
      setData(result);
      if (!history.includes(inputCity)) {
        setHistory((h) => [...h, inputCity]);
      }
    }
  };

  const clear = () => {
    inputRef.current.value = "";
    setHistory([]);
    setData({});
    inputRef.current?.focus();
  };

  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
        <Button label="Clear" onClick={clear} />
        <Button
          label="Search"
          onClick={() => {
            search(inputRef.current?.value);
          }}
        />
      </div>
      <ButtonsContainer history={history} search={search} />
      <div>
        <DataDisplayer data={data} />
      </div>
    </div>
  );
}
