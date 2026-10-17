import React, { useState } from "react";
import VarietyGrid from "../../../../components/VarietyGrid";
import ItemDetailsModal from "../../../../components/ItemDetailsModal";
import { useCart } from "../../../../context/CartContext";

export default function Tomatoes() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: "sungold",
      name: "Sungold",
      image: "/src/assets/seedlings/varieties/sungold.jpg",
      price: 4,
      description: "Super-sweet orange cherry tomato with prolific yields.",
    },
    {
      id: "cherokeePurple",
      name: "Cherokee Purple",
      image: "/src/assets/seedlings/varieties/cherokeePurple.jpg",
      price: 4,
      description: "Rich, dusky heirloom with complex flavor.",
    },
    {
      id: "roma",
      name: "Roma",
      image: "/src/assets/seedlings/varieties/roma.jpg",
      price: 4,
      description: "Classic paste tomato ideal for sauces and canning.",
    },
    {
      id: "pineappleHeirloom",
      name: "Pineapple Heirloom",
      image: "/src/assets/seedlings/varieties/pineappleHeirloom.jpg",
      price: 4,
      description: "Yellow-red bicolor heirloom with sweet, fruity notes.",
    },
    {
      id: "sanMarzano",
      name: "San Marzano",
      image: "/src/assets/seedlings/varieties/sanMarzano.jpg",
      price: 4,
      description: "Italian paste tomato with dense flesh and low seeds.",
    },
    {
      id: "greenZebra",
      name: "Green Zebra",
      image: "/src/assets/seedlings/varieties/greenZebra.jpg",
      price: 4,
      description: "Striped green tomato with bright, tangy flavor.",
    },
    {
      id: "stripedGerman",
      name: "Striped German",
      image: "/src/assets/seedlings/varieties/stripedGerman.jpg",
      price: 4,
      description: "Large yellow-red striped heirloom with sweet flavor.",
    },
    {
      id: "heirloom",
      name: "Mixed Heirloom Tomatoes",
      image: "/src/assets/seedlings/varieties/heirloom.jpg",
      price: 4,
      description: "A colorful mix of classic heirloom tomato varieties.",
    },
  ];

  return (
    <>
      <VarietyGrid title="Tomato Varieties" items={items} onDetails={setSelectedItem} />
      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
