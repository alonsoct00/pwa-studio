import React, { useState } from 'react';
import './FlyingCart.css';

const FlyingCart = ({ products }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getTotalQuantity = () => {
    return products.reduce((total, product) => total + product.quantity, 0);
  };

  const getSubtotal = () => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`flying-cart ${isVisible ? 'cart-visible' : 'cart-hidden'}`}>
      <div className="cart-header">
        <h3>Mi carrito</h3>
        <p>Productos: {getTotalQuantity()}</p>
        <p>Subtotal: ${getSubtotal().toFixed(2)} MXN</p>
      </div>
      <div className="cart-body">
        {products.map(product => (
          <div key={product.sku} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <p className="product-sku">{product.sku}</p>
              <p>{product.name}</p>
              <p className="product-quantity">Quantity: {product.quantity}</p>
              <p className="product-price">
                Price: ${product.price.toFixed(2)}
                {product.msrp && <span>(MSRP: ${product.msrp.toFixed(2)})</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <div className="buttons">
          <button className="finish-button">Finalizar Compra</button>
          <a href="#" className="edit-button">Editar carrito</a>
        </div>
      </div>
    </div>
  );
};

export default FlyingCart;
