import React from 'react';
import TodoIistItem from '../Todo-list-item';
import './todo-list.css';

const TodoList = ({ elements, onDeleted, onItemClick, onStartEdit, onFinishEdit, setNameEdit, min, sec }) => {
  const currentMin = Number(min);
  const currentSec = Number(sec);
  const time = currentMin * 60 + currentSec;

  return (
    <ul className="todo-list">
      {elements.map((e) => (
        <TodoIistItem
          time={time}
          onFinishEdit={(event) => {
            if (event.key === 'Enter') {
              onFinishEdit(e.id);
            }
          }}
          setNameEdit={setNameEdit}
          id={e.id}
          editing={e.editing}
          onStartEdit={(event) => {
            event.stopPropagation();
            onStartEdit(e.id);
          }}
          name={e.name}
          key={e.id}
          onItemClick={() => onItemClick(e.id)}
          completed={e.completed}
          hidden={e.hidden}
          onDeleted={() => onDeleted(e.id)}
        />
      ))}
    </ul>
  );
};
export default TodoList;
