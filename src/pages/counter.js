import moment from "moment";
import { useEffect, useState } from "react";

const myButton = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTime((time) => time + 10), 10;
      });
    } else if (!running) {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  return (
    <div className="text-2xl text-center mt-40 flex flex-col gap-8 ">
      <div className=" flex mx-auto">
        <p className="w-9 ">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </p>
        <p className="w-9">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </p>
        <p className="w-8">{("0" + ((time / 100) % 10)).slice(-2)}</p>
      </div>
      <div className="flex gap-8 justify-center">
        {running ? (
          <button className="btn btn-error" onClick={() => setRunning(false)}>
            stop
          </button>
        ) : (
          <button className="btn btn-success" onClick={() => setRunning(true)}>
            start
          </button>
        )}
        <button
          className="btn btn-info"
          onClick={() => {
            setRunning(false), setTime(0);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default myButton;
