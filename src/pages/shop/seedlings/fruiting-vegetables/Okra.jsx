import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Okra() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "okra",
      name: "Okra",
      image: "/src/assets/seedlings/varieties/okra.jpg",
      price: 4,
      description: "Tender pods great for frying, stews, and gumbo.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Okra Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
