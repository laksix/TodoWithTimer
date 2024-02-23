import React from 'react';
import FooterItem from '../Footer-list-item/Footer-list-item-selected';
import './footer-list.css';

const FooterList = ({ footerItems }) => {
  return (
    <ul className="filters">
      {footerItems.map((e) => {
        return <FooterItem name={e.name} key={e.id} id={e.id} status={e.selected} click={e.onClick} />;
      })}
    </ul>
  );
};

export default FooterList;
