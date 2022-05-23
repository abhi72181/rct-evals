import React, { useEffect, useState } from "react";
import "./Counter.css";
const Counter = ({ num }) => {
  console.log("num", num);
  const [startNumber, setStartNumber] = useState(0);

  useEffect(() => {
    setStartNumber(num);
  }, [num]);
  return (
    <>
      <div className={startNumber % 2 == 0 ? "green" : "red"}>
        counter:{startNumber}
      </div>
      <button onClick={() => setStartNumber(startNumber + 1)}>Increment</button>
      <button onClick={() => setStartNumber(startNumber - 1)}>Decrement</button>
      <button onClick={() => setStartNumber(startNumber * 2)}>Double</button>
    </>
  );
};

export default Counter;
