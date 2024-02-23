import React from 'react';
import Todolist from '../Todo-list/todo-list';
import Footer from '../Footer/footer';
import './secondblock.css';
const SecondBlock = ({
  min,
  sec,
  onFinishEdit,
  setNameEdit,
  onStartEdit,
  onDeleted,
  onItemClick,
  elements,
  clearCompleted,
  footerItems,
}) => {
  return (
    <section className="main">
      <Todolist
        min={min}
        sec={sec}
        onFinishEdit={onFinishEdit}
        setNameEdit={setNameEdit}
        onStartEdit={onStartEdit}
        onDeleted={onDeleted}
        onItemClick={onItemClick}
        elements={elements}
      />
      <Footer clearCompleted={clearCompleted} footerItems={footerItems} elements={elements} />
    </section>
  );
};
export default SecondBlock;
