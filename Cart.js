// Cart.js
import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      <div id="cart-content">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
              <span className="quantity">{item.quantity}</span>
              <button className="remove" onClick={() => removeFromCart(item)}>
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
