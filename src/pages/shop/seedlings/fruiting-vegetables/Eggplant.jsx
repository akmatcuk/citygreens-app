import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Eggplant() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "japanese",
      name: "Japanese Eggplant",
      image: "/src/assets/seedlings/varieties/japanese.jpg",
      price: 4,
      description: "Long, slender fruits with tender flesh and mild flavor.",
    },
    {
      id: "italian",
      name: "Italian Eggplant",
      image: "/src/assets/seedlings/varieties/italian.jpg",
      price: 4,
      description: "Classic globe-shaped eggplant perfect for roasting and grilling.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Eggplant Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
