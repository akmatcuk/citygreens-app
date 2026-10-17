import { db } from "./firebaseNode.js";
import { collection, addDoc } from "firebase/firestore";
import { produceData } from "../src/data/produceData.js";

async function uploadProduce() {
  const col = collection(db, "produce");

  for (const item of produceData) {
    await addDoc(col, item);
    console.log("Uploaded produce:", item.name);
  }

  console.log("Produce upload complete.");
}

uploadProduce();
