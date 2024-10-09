// App.js
import React, { useState } from 'react';
import ProductBox from './components/ProductBox/ProductBox';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Producto 1', image: '"D:\Paguinas web\paguinafarmacia1\Dexan.jpeg"' },
    { id: 2, name: 'Producto 2', image: '"D:\Paguinas web\paguinafarmacia1\Dexan.jpeg"' },
  ];

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <header>
        <h1>Farmacia Online</h1>
      </header>
      <main>
        <section className="product-list">
          {products.map((product) => (
            <ProductBox key={product.id} product={product} addToCart={addToCart} />
          ))}
        </section>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
    </div>
  );
}

export default App;
