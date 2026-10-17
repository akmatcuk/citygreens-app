import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Broccoli() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "broccoli",
      name: "Broccoli",
      image: "/src/assets/seedlings/varieties/broccoli.jpg",
      price: 4,
      description: "Classic fall brassica with tight green heads and excellent cold tolerance.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Broccoli Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
