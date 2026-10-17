import { db } from "./firebaseNode.js";
import { collection, addDoc } from "firebase/firestore";
import { merchData } from "../src/data/merchData.js";

async function uploadMerch() {
  const col = collection(db, "merch");

  for (const item of merchData) {
    await addDoc(col, item);
    console.log("Uploaded merch:", item.name);
  }

  console.log("Merch upload complete.");
}

uploadMerch();
