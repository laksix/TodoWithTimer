import React, { useState } from 'react';
import Header from '../Header';
import SecondBlock from '../Second-block';
import './first-section.css';

const FirstSection = () => {
  const [timeMin, setTimeMin] = useState(null);
  const [timeSec, setTimeSec] = useState(null);
  const [elements, setElements] = useState([]);
  const [currentValue, setCurrentValue] = useState();
  const [footerItems, setFooterItems] = useState([
    {
      name: 'All',
      id: 0,
      selected: true,
      onClick: (id) => {
        setFooterItems((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            selected: item.id === id ? true : false,
          }))
        );
        setElements((prevElements) =>
          prevElements.map((element) => ({
            ...element,
            hidden: false,
          }))
        );
      },
    },
    {
      name: 'Completed',
      id: 1,
      selected: false,
      onClick: (id) => {
        setFooterItems((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            selected: item.id === id ? true : false,
          }))
        );
        setElements((prevElements) =>
          prevElements.map((element) => ({
            ...element,
            hidden: !element.completed,
          }))
        );
      },
    },
    {
      name: 'Active',
      id: 2,
      selected: false,
      onClick: (id) => {
        setFooterItems((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            selected: item.id === id ? true : false,
          }))
        );
        setElements((prevElements) =>
          prevElements.map((element) => ({
            ...element,
            hidden: element.completed,
          }))
        );
      },
    },
  ]);

  const onItemClick = (id) => {
    setElements((prevElements) =>
      prevElements.map((element) => ({
        ...element,
        completed: element.id === id ? !element.completed : element.completed,
      }))
    );
  };

  const addNewText = (event) => {
    setCurrentValue(event.target.value);
  };
  const setCurrentName = (e) => {
    if (e.key === 'Enter') {
      e.target.value = '';
      addItem();
    }
  };
  const clearCompleted = () => {
    setElements((prevElements) => prevElements.filter((e) => !e.completed));
  };
  const deleteItem = (id) => {
    setElements((prevElements) => {
      const idx = prevElements.findIndex((el) => el.id === id);
      const after = prevElements.slice(0, idx);
      const before = prevElements.slice(idx + 1);
      const newArr = [...after, ...before];
      return newArr;
    });
  };
  const onStartEdit = (id) => {
    setElements((prevElements) =>
      prevElements.map((e) => {
        if (e.id === id) {
          e.editing = true;
        }
        return e;
      })
    );
  };
  const setNameEdit = (event, id) => {
    setElements((prevElements) =>
      prevElements.map((e) => {
        if (e.id === id) {
          e.name = event.target.value;
        }
        return e;
      })
    );
  };
  const onFinishEdit = (id) => {
    setElements((prevElements) =>
      prevElements.map((e) => {
        if (e.id === id) {
          e.editing = false;
        }
        return e;
      })
    );
  };
  const addItem = () => {
    if (currentValue.length === 0) return;
    setElements((prevElements) => [
      ...prevElements,
      {
        name: currentValue,
        id: prevElements.length + 1,
        completed: false,
        hidden: false,
        editing: false,
        timeMin: timeMin,
        timeSec: timeSec,
      },
    ]);
    setCurrentName('');
  };
  const setCurrentMin = (e) => {
    setTimeMin(e.target.value);
  };

  const setCurrentSec = (e) => {
    setTimeSec(e.target.value);
  };

  const clearInput = (e) => {
    if (e.key === 'Enter') {
      addItem();
      setTimeout(() => {
        setTimeMin(null);
        setTimeSec(null);
      }, 100);
    }
  };
  console.log(elements, currentValue);

  return (
    <section className="todoapp">
      <Header
        clearInput={clearInput}
        setTimeSec={setCurrentMin}
        setTimeMin={setCurrentSec}
        addNewText={addNewText}
        setCurrentName={setCurrentName}
      />
      <SecondBlock
        min={timeMin}
        sec={timeSec}
        onFinishEdit={onFinishEdit}
        setNameEdit={setNameEdit}
        onStartEdit={onStartEdit}
        clearCompleted={clearCompleted}
        footerItems={footerItems}
        onItemClick={onItemClick}
        currentName={currentValue}
        elements={elements}
        onDeleted={deleteItem}
      />
    </section>
  );
};

export default FirstSection;
