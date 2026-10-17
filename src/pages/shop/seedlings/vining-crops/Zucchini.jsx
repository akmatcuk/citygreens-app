import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Zucchini() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "zucchini",
      name: "Zucchini",
      image: "/src/assets/seedlings/varieties/zucchini.jpg",
      price: 4,
      description: "Prolific summer squash with versatile culinary uses.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Zucchini Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
