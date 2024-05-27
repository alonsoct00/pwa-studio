import React from 'react';
import './Menu.css';

const categories = [
  'HOGAR',
  'ELECTRODOMÉSTICOS',
  'ELECTRÓNICA',
  'HERRAMIENTAS',
  'DEPORTES',
  'JUGUETES',
  'MODA',
  'MASCOTAS',
  'JARDÍN',
  'VIDEOJUEGOS',
  'INDUSTRIAL',
];

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        {categories.map((category, index) => (
          <li key={index} className="menu-item">
            {category}
          </li>
        ))}
      </ul>
    );
  }
}

export default Menu;