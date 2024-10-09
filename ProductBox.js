// ProductBox.js
import React, { useState } from 'react';
import './ProductBox.css';

function ProductBox({ product, addToCart }) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  return (
    <div className="product-box">
      <img
        src={product.image}
        alt={product.name}
        className="product-img"
        onClick={() => handleImageClick(product.image)}
      />
      <button className="add-cart" onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>

      {showModal && (
        <div className="modal-container" onClick={() => setShowModal(false)}>
          <img src={modalImage} alt="Producto ampliado" id="img-modal" />
          <button id="modal-close" onClick={() => setShowModal(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default ProductBox;
