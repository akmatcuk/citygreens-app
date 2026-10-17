import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Watermelon() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "watermelon",
      name: "Watermelon",
      image: "/src/assets/seedlings/varieties/watermelon.jpg",
      price: 4,
      description: "Sweet summer melons grown on vigorous vines.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Watermelon Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
