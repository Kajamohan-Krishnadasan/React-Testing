import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <input
        type="number"
        name="amount"
        value={amount}
        title="amount input field"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />

      <button onClick={() => setCount(amount)}> Set </button>

      <select id="multiple-select" multiple size={2}>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
        <option value="4">D</option>
        <option value="5">E</option>
        <option value="6">F</option>
      </select>
    </div>
  );
};

export default Counter;
