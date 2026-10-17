import { db } from "./firebaseNode.js";
import { collection, addDoc } from "firebase/firestore";
import { mainSeedlings } from "../src/data/mainSeedlingsData.js";

async function uploadSeedlings() {
  const col = collection(db, "inventory");

  for (const item of mainSeedlings) {
    await addDoc(col, item);
    console.log("Uploaded seedling:", item.name);
  }

  console.log("Seedlings upload complete.");
}

uploadSeedlings();
