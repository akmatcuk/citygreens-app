import React, { createContext, useContext, useState, useEffect } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  // Season filter: "all", "fall", "spring"
  const [selectedSeason, setSelectedSeason] = useState(() => {
    try {
      const saved = localStorage.getItem("selectedSeason");
      return saved ? saved : "all";
    } catch {
      return "all";
    }
  });

  // Category filters: array of category strings
  const [selectedCategories, setSelectedCategories] = useState(() => {
    try {
      const saved = localStorage.getItem("selectedCategories");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist season filter
  useEffect(() => {
    try {
      localStorage.setItem("selectedSeason", selectedSeason);
    } catch {}
  }, [selectedSeason]);

  // Persist category filters
  useEffect(() => {
    try {
      localStorage.setItem("selectedCategories", JSON.stringify(selectedCategories));
    } catch {}
  }, [selectedCategories]);

  // Toggle category filter
  function toggleCategory(category) {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }
      return [...prev, category];
    });
  }

  // Clear one category filter (used for the X button)
  function removeCategory(category) {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  }

  // Clear all category filters
  function clearCategories() {
    setSelectedCategories([]);
  }

  // Switch season (tab behavior)
  function changeSeason(season) {
    setSelectedSeason(season);
  }

  return (
    <FilterContext.Provider
      value={{
        selectedSeason,
        changeSeason,
        selectedCategories,
        toggleCategory,
        removeCategory,
        clearCategories,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  return useContext(FilterContext);
}
