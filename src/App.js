import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(inputValue).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === '') {
      setInputValue("");
      setResult("");
    }
    else {
      setInputValue((prevValue) => prevValue + value);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div id="cal-body">
          <div className="input">
            {result ? <input type="text" readOnly value={result} />
              : <input type="text" value={inputValue} readOnly onChange={(e) => setInputValue(e.target.value)} />
            }

          </div>
          <div style={{ paddingTop: '40px' }}>
            <div className="buttons">
              <button onClick={() => handleButtonClick('1')}>1</button>
              <button onClick={() => handleButtonClick('2')}>2</button>
              <button onClick={() => handleButtonClick('3')}>3</button>
              <button onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div className="buttons">
              <button onClick={() => handleButtonClick('4')}>4</button>
              <button onClick={() => handleButtonClick('5')}>5</button>
              <button onClick={() => handleButtonClick('6')}>6</button>
              <button onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div className="buttons">
              <button onClick={() => handleButtonClick('7')}>7</button>
              <button onClick={() => handleButtonClick('8')}>8</button>
              <button onClick={() => handleButtonClick('9')}>9</button>
              <button onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div className="buttons">
              <button onClick={() => handleButtonClick('.')}>.</button>
              <button onClick={() => handleButtonClick('0')}>0</button>
              <button onClick={() => handleButtonClick('/')}>/</button>
              <button onClick={() => handleButtonClick('=')}>=</button>
            </div>
            <div className="buttons">
              <button style={{ width: '440px' }} onClick={() => handleButtonClick("")}>Clear</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
