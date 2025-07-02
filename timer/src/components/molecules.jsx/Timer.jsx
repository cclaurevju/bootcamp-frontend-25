import TimeDisplay from "../atoms/TimeDisplay";
import Button from "../atoms/Button";

export default function Timer() {
  return (
    <div>
      <h1>Timer</h1>
      <div>
        <div className="time-display-list">
          <TimeDisplay label={"mins"} />
          <TimeDisplay label={"mins"} />
        </div>
        <div>
          <Button>Start</Button>
          <Button>Stop</Button>
          <Button>Reset</Button>
        </div>
      </div>
    </div>
  );
}
