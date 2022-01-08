import React from "react";
import { useState } from "react";

const CalculatorInput = (props) => {
  const [input, setInput] = useState(""); //initial state value

  function onSubmit(e) {
    e.preventDefault();

    if (input.includes("*")) {
      const indexOp = input.indexOf("*");
      const num1 = input.substring(0, indexOp);
      const num2 = input.substring(indexOp + 1, input.length);
      setInput(num1 * num2);
    } else if (input.includes("/")) {
      const indexOp = input.indexOf("/");
      const num1 = input.substring(0, indexOp);
      const num2 = input.substring(indexOp + 1, input.length);
      setInput(num1 / num2);
    } else if (input.includes("+")) {
      const indexOp = input.indexOf("+");
      const num1 = input.substring(0, indexOp);
      const num2 = input.substring(indexOp + 1, input.length);
      setInput(num1 + num2);
    } else if (input.includes("-")) {
      const indexOp = input.indexOf("-");
      const num1 = input.substring(0, indexOp);
      const num2 = input.substring(indexOp + 1, input.length);
      setInput(num1 - num2);
    } else {
      setInput("Invalid Input, Please Try (*, /, +, -)");
    }
  }

  return (
    <div className="calculatorInput">
      <form>
        <input
          type="text"
          id="num"
          placeholder="do math here! (+, -, *, /)"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={onSubmit} className="btn">
          =
        </button>
      </form>
    </div>
  );
};

export default CalculatorInput;
