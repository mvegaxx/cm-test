import React from "react";

const OPERATIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

export default function ReducerExample() {
  const [number, updateNumber] = React.useState(0);

  const [state, dispatch] = React.useReducer((state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD":
        return state + number;
      case "SUBTRACT":
        return state + number;
      default:
        throw new Error();
    }
  }, 0);

  /* implement dispatches */
  const add = () => dispatch({ type: OPERATIONS.ADD });
  const subtract = () => dispatch({ type: OPERATIONS.SUBTRACT });

  const handleNumberChange = (e) => {
    if (!isNaN(Number(e.target.value))) {
      updateNumber(Number(e.target.value));
    }
  };

  return (
    <div>
      <div id="result">{state}</div>
      <div>
        <button id="add" onClick={add}>
          Add
        </button>
        <button id="subtract" onClick={subtract}>
          Subtract
        </button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </div>
  );
}
