import { useState } from 'react'
import './App.css'

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumber = (digit) => {
    setCurrentValue(prev => prev === "0" ? String(digit) : prev + digit);
  }

  const handleDecimal = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
    }
  }

  const handleOperator = (op) => {
    setPreviousValue(Number(currentValue));
    setOperator(op);
    setCurrentValue("0");
  }

  const calculate = () => {
    const first = previousValue;
    const second = Number(currentValue);

    let result = 0;
    if (operator === "+") result = first + second;
    if (operator === "-") result = first - second;
    if (operator === "*") result = first * second;
    if (operator === "/") {
      result = second === 0 ? "Error" : first / second;
    }

    setCurrentValue(String(result));
    setOperator(null);
    setPreviousValue(null)
     };

     const clear = () => {
      setCurrentValue("0");
      setPreviousValue(null);
      setOperator(null)
     }

     return (
      <div className='calculator'>
        <div className='display'>
          <div className='previous'>{previousValue} {operator === `*` ? `x` : operator === `/` ? `÷` : operator}</div>
          <div className='current'>{currentValue}</div>
        </div>
        
        <div className='keypad'>
          <button onClick={clear} className='span-two clear-btn'>AC</button>
          <button onClick={() => handleOperator("/")} className='operator-btn'>÷</button>
          <button onClick={() => handleOperator("*")} className='operator-btn'>x</button>

          {[7, 8, 9].map(n => <button key={n} onClick={() => handleNumber(n)}>{n}</button>)}
          <button onClick={() => handleOperator("-")} className='operator-btn'>-</button>

          {[4, 5, 6].map(n => <button key={n} onClick={() => handleNumber(n)}>{n}</button>)}
          <button onClick={() => handleOperator("+")} className='operator-btn'>+</button>

          {[1, 2, 3].map(n => <button key={n} onClick={() => handleNumber(n)}>{n}</button>)}
          <button onClick={handleDecimal}>.</button>

          <button onClick={() => handleNumber("0")} className='span-two'>0</button>
          <button onClick={calculate} className='span-two equals-btn'>=</button>
          
        </div>
      </div>
     )
    
}

export default App;


