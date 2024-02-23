import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './todo-list-item.css';
const TodoListItem = ({
  time,
  onFinishEdit,
  setNameEdit,
  id,
  editing,
  name,
  onItemClick,
  completed,
  hidden,
  onDeleted,
  onStartEdit,
}) => {
  const [date, setDate] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState(time);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) {
        setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounting]);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => setDate(new Date()), 1000);
      return () => clearInterval(interval);
    }
  }, [isCounting]);

  const handleStart = () => {
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  const getTime = (time) => {
    if (typeof time === 'undefined') {
      return '00';
    }
    return time.toString().padStart(2, '0');
  };

  const minutes = getTime(Math.floor(timeLeft / 60));
  const seconds = getTime(timeLeft - minutes * 60);

  let classTag = '';
  if (completed) {
    classTag += 'completed';
  }
  if (hidden) {
    classTag += ' hidden';
  }
  if (editing) {
    classTag = 'editing';
  }

  const result = formatDistanceToNow(date, { includeSeconds: true });

  return (
    <li className={classTag}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={() => null} onClick={onItemClick} />
        <label>
          <span className="description" onClick={onItemClick}>
            {name}
          </span>
          <span className="created">created {result}</span>
        </label>
        <button className="icon icon-play" onClick={handleStart}></button>
        <button className="icon icon-pause" onClick={handleStop}></button>
        <span className="time-left">{`${minutes}:${seconds}`}</span>
        <button className="icon icon-edit" onClick={onStartEdit}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>

      {editing && (
        <input
          className="edit"
          value={name}
          onChange={(event) => setNameEdit(event, id)}
          onKeyUp={(event) => onFinishEdit(event, id)}
          autoFocus
        />
      )}
    </li>
  );
};

export default TodoListItem;
