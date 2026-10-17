import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Corn() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "corn",
      name: "Sweet Corn",
      image: "/src/assets/seedlings/varieties/corn.jpg",
      price: 4,
      description: "Classic summer crop with sweet, tender kernels. Grows vigorously in warm weather.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Corn Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
