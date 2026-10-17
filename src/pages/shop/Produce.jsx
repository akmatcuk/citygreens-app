import React, { useState, useEffect } from "react";
import "./shop-category.css";

import { db } from "../../firebase/firebase";
import { useFilters } from "../../context/FilterContext";
import ItemDetailsModal from "../../components/ItemDetailsModal";

export default function Produce() {
  const {
    selectedCategories,
    toggleCategory,
    removeCategory,
  } = useFilters();

  const [produce, setProduce] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const CATEGORY_LABELS = {
    lettuces: "Lettuces",
    "other-greens": "Other Greens",
    herbs: "Herbs",
  };

  const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS);

  // Fetch produce from Firestore
  useEffect(() => {
    const unsubscribe = db.collection("produce").onSnapshot((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProduce(items);
    });

    return () => unsubscribe();
  }, []);

  function matchesCategory(item) {
    if (item.featured) return selectedCategories.length === 0;
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(item.category);
  }

  const sortedProduce = produce
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
        <h1 className="shop-category-title">Produce</h1>
        <p className="shop-category-subtitle">
          Fresh produce grown at City Greens.
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

        {/* Produce Grid */}
        <div className="product-grid">
          {sortedProduce.map((item) => (
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
