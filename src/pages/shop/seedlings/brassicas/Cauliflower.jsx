import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Cauliflower() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "cauliflower",
      name: "Cauliflower",
      image: "/src/assets/seedlings/varieties/cauliflower.jpg",
      price: 4,
      description: "Dense white heads with mild flavor, perfect for roasting or mashing.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Cauliflower Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
