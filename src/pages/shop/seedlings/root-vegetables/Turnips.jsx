import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Turnips() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "turnips",
      name: "Turnips",
      image: "/src/assets/seedlings/varieties/turnips.jpg",
      price: 4,
      description: "Mild, tender roots great for roasting or mashing.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Turnip Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
