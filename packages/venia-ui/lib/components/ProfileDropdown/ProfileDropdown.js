import React from 'react';
import './ProfileDropdown.css';

const ProfileDropdown = () => {
  const handleItemClick = (action) => {
    console.log(`Navigating to ${action}`);
    // Here you would typically navigate to a different route or perform an action
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-icon">
        <span>👤</span>
      </div>
      <div className="dropdown-content">
        {['Cuentas', 'Pedidos', 'Facturación', 'Cotizaciones', 'Cerrar Sesión'].map((item) => (
          <div
            key={item}
            className="dropdown-item"
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDropdown;