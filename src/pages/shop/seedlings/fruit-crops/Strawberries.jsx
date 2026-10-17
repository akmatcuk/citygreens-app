import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Strawberries() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "strawberries",
      name: "Strawberries",
      image: "/src/assets/seedlings/varieties/strawberries.jpg",
      price: 4,
      description: "Sweet red berries grown on compact plants. Excellent for containers and garden beds.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Strawberry Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </>
  );
}
