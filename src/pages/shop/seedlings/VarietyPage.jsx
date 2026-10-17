import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import VarietyGrid from "../../../components/VarietyGrid";
import ItemDetailsModal from "../../../components/ItemDetailsModal";

export default function VarietyPage({ cropId, title }) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function loadVarieties() {
      const snapshot = await getDocs(collection(db, "varieties"));

      // ⭐ MATCH YOUR FIRESTORE: varieties link via cropId
      const list = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(item => item.cropId === cropId);

      setItems(list);
    }

    loadVarieties();
  }, [cropId]);

  return (
    <>
      <VarietyGrid title={title} items={items} onDetails={setSelectedItem} />

      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
