'use client'
import React, { useState } from 'react';

const Calculator=()=> {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = evaluate(firstOperand, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const evaluate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md w-64 mx-auto mt-8">
      <div className="mb-2">
        <input
          className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-2xl font-semibold text-right"
          type="text"
          value={displayValue}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => inputDigit(7)}>7</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => inputDigit(8)}>8</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => inputDigit(9)}>9</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => performOperation('/')}>/</button>

        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => inputDigit(4)}>4</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => inputDigit(5)}>5</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => inputDigit(6)}>6</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => performOperation('*')}>*</button>

        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => inputDigit(1)}>1</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => inputDigit(2)}>2</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => inputDigit(3)}>3</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => performOperation('-')}>-</button>

        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold col-span-2" onClick={() => inputDigit(0)}>0</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={inputDecimal}>.</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold" onClick={() => performOperation('+')}>+</button>

        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold col-span-4" onClick={clearDisplay}>AC</button>
        <button className="bg-gray-300 rounded-md px-3 py-2 text-2xl font-semibold col-span-4" onClick={() => performOperation('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
