import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Squash() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "squash",
      name: "Summer Squash",
      image: "/src/assets/seedlings/varieties/squash.jpg",
      price: 4,
      description: "Tender summer squash for grilling and sautés.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Squash Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
