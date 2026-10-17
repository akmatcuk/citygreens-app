import React from "react";
import "./ItemDetailsModal.css";
import { useCart } from "../context/CartContext";

export default function ItemDetailsModal({ item, onClose }) {
  const { addToCart } = useCart();
  const [qty, setQty] = React.useState(1);

  if (!item) return null;

  function handleAdd() {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      qty,
      image: item.image,
      description: item.description,
    });

    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={onClose}>×</button>

        <img src={item.image} alt={item.name} className="modal-image" />

        <h2 className="modal-title">{item.name}</h2>
        <p className="modal-description">{item.description}</p>

        <p className="modal-price">${item.price}</p>

        <div className="modal-qty">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <button className="modal-add" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
