import React, { useState, useEffect } from "react";
import "./shop-category.css";

import { db } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { useFilters } from "../../context/FilterContext";
import { useNavigate } from "react-router-dom";

const CATEGORY_LABELS = {
  "leafy-greens": "Leafy Greens",
  brassicas: "Brassicas",
  "root-vegetables": "Root Vegetables",
  "fruiting-vegetables": "Fruiting Vegetables",
  "vining-crops": "Vining Crops",
  herbs: "Herbs",
  flowers: "Flowers",
  "fruit-crops": "Fruit Crops",
  "field-crops": "Field Crops",
};

const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS);

export default function Seedlings() {
  const navigate = useNavigate();
  const {
    selectedSeason,
    changeSeason,
    selectedCategories,
    toggleCategory,
    removeCategory,
  } = useFilters();

  const [seedlings, setSeedlings] = useState([]);

  // ⭐ REAL-TIME FIRESTORE LISTENER
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "inventory"), (snap) => {
      const items = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setSeedlings(items);
    });

    return () => unsub();
  }, []);

  // ⭐ FILTERS (same as before)
  function matchesSeason(item) {
    if (selectedSeason === "all") return true;
    if (!item.seasons) return true; // fallback until seasons added to Firestore
    return item.seasons.includes(selectedSeason);
  }

  function matchesCategory(item) {
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(item.category);
  }

  const filteredSeedlings = seedlings
    .filter(matchesSeason)
    .filter(matchesCategory)
    .sort((a, b) => a.name.localeCompare(b.name));

  const orderedCategories = [
    ...ALL_CATEGORIES.filter((c) => selectedCategories.includes(c)),
    ...ALL_CATEGORIES.filter((c) => !selectedCategories.includes(c)),
  ];

  return (
    <div className="shop-category-page">
      <div className="shop-category-inner">
        <h1 className="shop-category-title">Seedlings</h1>
        <p className="shop-category-subtitle">
          Reserve starter plants grown at City Greens.
        </p>

        {/* Season Filters */}
        <div className="season-filter-row">
          {["all", "fall", "spring"].map((season) => (
            <button
              key={season}
              className={
                "season-filter-btn" +
                (selectedSeason === season ? " season-filter-active" : "")
              }
              onClick={() => changeSeason(season)}
            >
              {season === "all"
                ? "All"
                : season.charAt(0).toUpperCase() + season.slice(1)}
            </button>
          ))}
        </div>

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

        {/* Seedlings Grid */}
        <div className="product-grid">
          {filteredSeedlings.map((item) => (
            <div
              key={item.id}
              className="seedlings-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="seedlings-card-overlay">
                <h2 className="seedlings-card-title">{item.name}</h2>

                <button
                  className="seedlings-card-button"
                  onClick={() => navigate(item.link)}
                >
                  View Varieties
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
