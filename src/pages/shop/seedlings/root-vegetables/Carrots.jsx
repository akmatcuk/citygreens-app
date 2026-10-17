import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Carrots() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "carrots",
      name: "Carrots",
      image: "/src/assets/seedlings/varieties/carrots.jpg",
      price: 4,
      description: "Sweet, crunchy roots ideal for snacking and cooking.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Carrot Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
