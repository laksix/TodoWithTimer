import React from 'react';
import FooterList from '../Footer-list';
import './footer.css';
const Footer = ({ elements, footerItems, clearCompleted }) => {
  const countItem = (elements) => {
    let count = 0;
    elements.forEach((e) => {
      if (!e.hidden) {
        count++;
      }
    });
    return `${count} item left`;
  };

  return (
    <footer className="footer">
      <span className="todo-count">{countItem(elements)}</span>
      <FooterList footerItems={footerItems} el={elements} />
      <button onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
