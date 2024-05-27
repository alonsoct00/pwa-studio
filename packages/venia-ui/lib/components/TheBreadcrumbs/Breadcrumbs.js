import React from 'react';
import './Breadcrumbs.css';

const Breadcrumb = ({ items }) => {
  return (
    <ul className="breadcrumb">
      {items.map((item, index) => (
        <li key={index} className="breadcrumb-item">
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;