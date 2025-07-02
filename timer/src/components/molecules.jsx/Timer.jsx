import TimeDisplay from "../atoms/TimeDisplay";
import Button from "../atoms/Button";
import { useEffect, useReducer, useRef } from "react";

const timeReducer = (state, action) => {
  console.log(state, action);
  if (action == "start") {
    return { ...state, isActive: true };
  }
  if (action == "stop") return { ...state, isActive: false };
  if (action == "tick")
    return {
      ...state,
      mins: state.secs + 1 == 60 ? state.mins + 1 : state.mins,
      secs: state.secs + 1 == 60 ? 0 : state.secs + 1,
    };

  if (action == "reset") return { mins: 0, secs: 0, isActive: false };
};

export default function Timer() {
  const [state, dispatch] = useReducer(timeReducer, {
    mins: 0,
    secs: 0,
    isActive: false,
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    if (state.isActive)
      intervalRef.current = setInterval(() => {
        console.log("tick");
        dispatch("tick");
      }, 1000);
    else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [state.isActive]);

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <div className="time-display-list">
          <TimeDisplay number={state.mins} label={"mins"} />
          <TimeDisplay number={state.secs} label={"secs"} />
        </div>
        <div>
          <Button
            onClick={() => {
              dispatch("start");
            }}
          >
            Start
          </Button>
          <Button
            onClick={() => {
              dispatch("stop");
            }}
          >
            Stop
          </Button>
          <Button
            onClick={() => {
              dispatch("reset");
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
