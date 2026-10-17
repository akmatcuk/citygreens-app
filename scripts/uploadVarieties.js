import { db } from "./firebaseNode.js";
import { collection, addDoc } from "firebase/firestore";
import { allVarieties } from "../src/data/allVarietiesData.js";

async function uploadVarieties() {
  const col = collection(db, "varieties");

  for (const categoryKey in allVarieties) {
    const category = allVarieties[categoryKey];

    for (const cropKey in category) {
      const crop = category[cropKey];

      for (const varietyKey in crop.varieties) {
        const variety = crop.varieties[varietyKey];

        await addDoc(col, {
          category: categoryKey,
          cropId: cropKey,
          cropName: crop.name,
          varietyId: varietyKey,
          ...variety
        });

        console.log("Uploaded variety:", variety.name);
      }
    }
  }

  console.log("Varieties upload complete.");
}

uploadVarieties();
