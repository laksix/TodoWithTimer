import React from 'react';
import Input from '../Input-in-Header';
import './header.css';

const Header = ({ clearInput, setTimeSec, setTimeMin, addNewText, setCurrentName }) => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <Input
        clearInput={clearInput}
        setTimeSec={setTimeSec}
        setTimeMin={setTimeMin}
        addNewText={addNewText}
        setCurrentName={setCurrentName}
      />
    </header>
  );
};
export default Header;
