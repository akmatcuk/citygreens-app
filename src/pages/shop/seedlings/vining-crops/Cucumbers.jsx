import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Cucumbers() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "marketmore",
      name: "Marketmore Cucumbers",
      image: "/src/assets/seedlings/varieties/marketmore.jpg",
      price: 4,
      description: "Classic slicing cucumber with dark green skins.",
    },
    {
      id: "persian",
      name: "Persian Cucumbers",
      image: "/src/assets/seedlings/varieties/persian.jpg",
      price: 4,
      description: "Small, crisp cucumbers perfect for snacking.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Cucumber Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
