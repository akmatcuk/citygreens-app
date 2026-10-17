import React from "react";
import "./shop.css";

// CORRECT IMPORT PATH FOR YOUR STRUCTURE
import { useCart } from "../context/CartContext";

const Shop = () => {
  const { cart } = useCart();

  const categories = [
    {
      id: "seedlings",
      title: "Seedlings",
      description: "Reserve starter plants grown at City Greens.",
      imageUrl: "/src/assets/shop/seedlings.jpg",
      link: "/shop/seedlings",
    },
    {
      id: "produce",
      title: "Produce",
      description: "Pre-order seasonal harvest bundles for pickup.",
      imageUrl: "/src/assets/shop/produce.jpg",
      link: "/shop/produce",
    },
    {
      id: "merch",
      title: "Merch",
      description: "Support the mission with totes and farm merch.",
      imageUrl: "/src/assets/shop/merch.jpg",
      link: "/shop/merch",
    },
  ];

  return (
    <div className="shop-page">

      <div className="shop-page-inner">
        <h1 className="shop-page-title">Shop City Greens</h1>
        <p className="shop-page-subtitle">
          Pre-order seedlings, produce, and merch for pickup at our next farm sale.
        </p>

        <div className="shop-card-grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="shop-card"
              style={{ backgroundImage: `url(${cat.imageUrl})` }}
            >
              <div className="shop-card-overlay">
                <h2 className="shop-card-title">{cat.title}</h2>
                <p className="shop-card-description">{cat.description}</p>

                <div className="shop-card-buttons">
                  <a href={cat.link} className="shop-card-button">
                    View Selection
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
