import React, { useState } from "react";
import "./styleCalculator.css";

function Calculator() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState(null);

  function handleNumberClick(number) {
    if (currentValue === "0") {
      setCurrentValue(number);
    } else {
      setCurrentValue(currentValue + number);
    }
  }

  function handleOperatorClick(operator) {
    if (previousValue !== "") {
      handleEqualsClick();
      setPreviousValue(currentValue);
      setOperation(operator);
    } else {
      setPreviousValue(currentValue);
      setCurrentValue("0");
      setOperation(operator);
    }
  }

  function handleEqualsClick() {
    if (operation === "+") {
      setCurrentValue(Number(previousValue) + Number(currentValue));
    } else if (operation === "-") {
      setCurrentValue(Number(previousValue) - Number(currentValue));
    } else if (operation === "*") {
      setCurrentValue(Number(previousValue) * Number(currentValue));
    } else if (operation === "/") {
      setCurrentValue(Number(previousValue) / Number(currentValue));
    }
    setPreviousValue("");
    setOperation(null);
  }

  return (
    <div className="calculator" tabIndex={0}>
      <div id="display" className="calculatorDisplay">
        {currentValue}
      </div>

      <div className="calculatorRow">
        <button
          className="calculatorBtn"
          id="nine"
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>
        <button
          className="calculatorBtn"
          id="eight"
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>
        <button
          className="calculatorBtn"
          id="seven"
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>
        <button
          className="calculatorBtn"
          id="divide"
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
      </div>
      <div className="calculatorRow">
        <button
          className="calculatorBtn"
          id="six"
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>
        <button
          className="calculatorBtn"
          id="five"
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>
        <button
          className="calculatorBtn"
          id="four"
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>
        <button
          className="calculatorBtn"
          id="multiply"
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>
      </div>
      <div className="calculatorRow">
        {" "}
        <button
          className="calculatorBtn"
          id="three"
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>
        <button
          className="calculatorBtn"
          id="two"
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>
        <button
          className="calculatorBtn"
          id="one"
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
        <button
          className="calculatorBtn"
          id="add"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
      </div>
      <div className="calculatorRow">
        <button
          className="calculatorBtn"
          id="zero"
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>
        <button
          className="calculatorBtn"
          id="subtract"
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
        <button
          className="calculatorBtn"
          id="equals"
          onClick={() => handleOperatorClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
