import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Beets() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "beets",
      name: "Beets",
      image: "/src/assets/seedlings/varieties/beets.jpg",
      price: 4,
      description: "Earthy, sweet roots perfect for roasting and salads.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Beet Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
