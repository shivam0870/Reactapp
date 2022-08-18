import React, { useState } from "react";

const Time = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  const [day, setday] = useState(new Date().toLocaleDateString());

  const updtime = () => {
    settime(new Date().toLocaleTimeString());
  };

  setInterval(() => {
    updtime();
  }, 1000);
  return (
    <div className="main_div">
      <h1>
        Current Time is =   <span style={{ color: "white" }}> {time} </span>
      </h1>
      <h1>
         and Current Date is = <span style={{ color: "white" }}>{day} </span>
      </h1>
    </div>
  );
};

export default Time;