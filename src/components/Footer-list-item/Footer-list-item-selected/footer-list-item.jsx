import React from 'react';
import './footer-list-item.css';
const FooterItem = ({ status, name, click, id }) => {
  return (
    <li>
      <button
        className={status ? 'selected' : ''}
        onClick={() => {
          click(id);
        }}
      >
        {name}
      </button>
    </li>
  );
};
export default FooterItem;
