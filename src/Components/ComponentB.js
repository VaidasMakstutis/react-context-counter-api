import React from "react";
import { useCounter } from "../Contexts/CounterContext";

const ComponentB = () => {
  const { increaseCount } = useCounter();
  return (
    <div className="d-flex justify-content-center" style={{ backgroundColor: "aquamarine" }}>
      <button className="btn btn-secondary" onClick={increaseCount}>
        +
      </button>
    </div>
  );
};

export default ComponentB;
