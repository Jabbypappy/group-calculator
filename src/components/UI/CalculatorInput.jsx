import React from "react";

const CalculatorInput = () => {
  return (
    <div className="calculatorInput">
      <form>
        <input type="text" id="num" placeholder="enter a number" />
        <input type="text" id="result" readOnly />
      </form>
    </div>
  );
};

export default CalculatorInput;
