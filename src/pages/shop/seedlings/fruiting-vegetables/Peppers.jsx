import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Peppers() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "hot",
      name: "Hot Peppers",
      image: "/src/assets/seedlings/varieties/hot.jpg",
      price: 4,
      description: "Spicy varieties perfect for adding heat to any dish.",
    },
    {
      id: "sweet",
      name: "Sweet Peppers",
      image: "/src/assets/seedlings/varieties/sweet.jpg",
      price: 4,
      description: "Crunchy, mild peppers ideal for salads and snacking.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Pepper Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
