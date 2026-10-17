import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Cabbage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "cabbage",
      name: "Cabbage",
      image: "/src/assets/seedlings/varieties/cabbage.jpg",
      price: 4,
      description: "Firm, compact heads ideal for slaws, fermenting, and hearty fall dishes.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Cabbage Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
