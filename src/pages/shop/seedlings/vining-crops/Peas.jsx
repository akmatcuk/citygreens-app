import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Peas() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "sugarSnap",
      name: "Sugar Snap Peas",
      image: "/src/assets/seedlings/varieties/sugarSnap.jpg",
      price: 4,
      description: "Sweet, crunchy pods perfect for fresh eating.",
    },
    {
      id: "snowPeas",
      name: "Snow Peas",
      image: "/src/assets/seedlings/varieties/snowPeas.jpg",
      price: 4,
      description: "Flat, tender pods ideal for stir-fries.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Pea Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
