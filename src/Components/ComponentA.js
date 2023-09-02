import React from "react";
import { useCounter } from "../Contexts/CounterContext";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const { count } = useCounter();
  return (
    <div style={{ backgroundColor: "wheat" }} className="mt-3">
      <h5 className="text-center">Count: {count}</h5>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
