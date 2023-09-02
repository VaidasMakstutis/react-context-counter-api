import React from "react";
import { Card } from "react-bootstrap";
import { useCounter } from "../Contexts/CounterContext";

const Counter = () => {
  const { count, increaseCount, decreaseCount, resetCount } = useCounter();
  return (
    <Card className="px-4 py-4">
      <h1>Counter component</h1>
      <h5 className="text-center pt-2 pb-2">Count is: {count}</h5>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={increaseCount}>
          +
        </button>
        <button className="btn btn-danger" onClick={resetCount}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={decreaseCount}>
          -
        </button>
      </div>
    </Card>
  );
};

export default Counter;
