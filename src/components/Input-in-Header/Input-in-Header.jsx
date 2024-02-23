import React, { useState } from 'react';
import './Input-in-Header.css';

const Input = ({ clearInput, addNewText, setCurrentName, setTimeSec, setTimeMin }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      setInput1('');
      setInput2('');
      setInput3('');
    }
  };

  return (
    <form className="inputsTimer" onKeyUp={clearInput}>
      <input
        className="new-todo"
        placeholder="What need to be done?"
        value={input1}
        autoFocus
        onChange={(e) => {
          addNewText(e);
          setInput1(e.target.value);
        }}
        onKeyUp={handleKeyUp}
        onKeyDown={setCurrentName}
        maxLength={10}
      ></input>
      <input
        className="form__timer"
        onKeyUp={handleKeyUp}
        value={input2}
        placeholder="Min"
        type="number"
        onChange={(e) => {
          setTimeSec(e);
          setInput2(e.target.value);
        }}
        autoFocus
      ></input>
      <input
        className="form__timer"
        onKeyUp={handleKeyUp}
        value={input3}
        placeholder="Sec"
        type="number"
        onChange={(e) => {
          setTimeMin(e);
          setInput3(e.target.value);
        }}
        autoFocus
      ></input>
    </form>
  );
};
export default Input;
