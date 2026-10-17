import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Beans() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "green",
      name: "Green Beans",
      image: "/src/assets/seedlings/varieties/green.jpg",
      price: 4,
      description: "Classic tender green beans for fresh eating and cooking.",
    },
    {
      id: "yellow",
      name: "Yellow Wax Beans",
      image: "/src/assets/seedlings/varieties/yellow.jpg",
      price: 4,
      description: "Sunny yellow pods with mild, sweet flavor.",
    },
    {
      id: "purple",
      name: "Purple Beans",
      image: "/src/assets/seedlings/varieties/purple.jpg",
      price: 4,
      description: "Striking purple pods that turn green when cooked.",
    },
    {
      id: "dragonsTongue",
      name: "Dragon’s Tongue Beans",
      image: "/src/assets/seedlings/varieties/dragonsTongue.jpg",
      price: 4,
      description: "Cream pods with purple streaks and rich flavor.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Bean Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
