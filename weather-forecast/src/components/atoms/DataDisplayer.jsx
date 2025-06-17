export default function DataDisplayer({ data }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>Temperature: {data.temperature}</p>
      <p>Humidity: {data.humidity}</p>
      <p>Wind Speed: {data.windSpeed}</p>
    </div>
  );
}
