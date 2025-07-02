import TimeDisplay from "../atoms/TimeDisplay";
import Button from "../atoms/Button";
import { useEffect, useReducer } from "react";

export default function Timer() {
  const [state, dispatch] = useReducer(timeReducer, {
    mins: 0,
    secs: 0,
    isActive: false,
  });

  useEffect(() => {
    console.log("ticks");
  }, [state.isActive]);

  const timeReducer = (state, action) => {
    if (action == "start") return { ...state, isActive: true };
    if (action == "stop") return { ...state, isActive: false };
    if (action == "tick")
      return {
        mins: state.secs + 1 == 60 ? state.mins + 1 : state.mins,
        secs: state.secs + 1 == 60 ? 0 : state.secs,
      };
    if (action == "reset") return { mins: 0, secs: 0, isActive: false };
  };
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
