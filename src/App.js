import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="container">
      <div className="Timercontainer">
        <div className="timer">
          <h2>StopWatch</h2>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttonGroup">
          {running ? (
            <button
              className="button mr-10"
              onClick={() => {
                setRunning(false);
              }}
            >
              Stop
            </button>
          ) : (
            <button
              className="button mr-10"
              onClick={() => {
                setRunning(true);
              }}
            >
              Start
            </button>
          )}

          <button
            className="button"
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
