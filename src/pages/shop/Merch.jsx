import React, { useState, useEffect } from "react";
import "./shop-category.css";

import { db } from "../../firebase/firebase";
import { useFilters } from "../../context/FilterContext";
import ItemDetailsModal from "../../components/ItemDetailsModal";

export default function Merch() {
  const {
    selectedCategories,
    toggleCategory,
    removeCategory,
  } = useFilters();

  const [merch, setMerch] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const CATEGORY_LABELS = {
    "t-shirts": "T-Shirts",
    totes: "Totes",
  };

  const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS);

  // Fetch merch from Firestore
  useEffect(() => {
    const unsubscribe = db.collection("merch").onSnapshot((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMerch(items);
    });

    return () => unsubscribe();
  }, []);

  function matchesCategory(item) {
    if (item.featured) return selectedCategories.length === 0;
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(item.category);
  }

  const sortedMerch = merch
    .filter(matchesCategory)
    .sort((a, b) => {
      if (a.featured) return -1;
      if (b.featured) return 1;
      return a.name.localeCompare(b.name);
    });

  const orderedCategories = [
    ...ALL_CATEGORIES.filter((c) => selectedCategories.includes(c)),
    ...ALL_CATEGORIES.filter((c) => !selectedCategories.includes(c)),
  ];

  return (
    <div className="shop-category-page">
      <div className="shop-category-inner">
        <h1 className="shop-category-title">Merch</h1>
        <p className="shop-category-subtitle">
          City Greens apparel and accessories.
        </p>

        {/* Category Filters */}
        <div className="category-filter-row">
          {orderedCategories.map((category) => {
            const isSelected = selectedCategories.includes(category);
            return (
              <button
                key={category}
                className={
                  "category-filter-btn" +
                  (isSelected ? " category-filter-active" : "")
                }
                onClick={() =>
                  isSelected ? removeCategory(category) : toggleCategory(category)
                }
              >
                {isSelected && <span className="category-filter-x">×</span>}
                {CATEGORY_LABELS[category]}
              </button>
            );
          })}
        </div>

        {/* Merch Grid */}
        <div className="product-grid">
          {sortedMerch.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-img" />

              <div className="product-info">
                <h2 className="product-name">{item.name}</h2>
                <p className="product-desc">{item.description}</p>

                <button
                  className="product-btn"
                  onClick={() => setSelectedItem(item)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Details Modal */}
        {selectedItem && (
          <ItemDetailsModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </div>
  );
}
