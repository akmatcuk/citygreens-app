import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaVHaN5qkijrJHQgt-YcyH_PvF2aV-DXU",
  authDomain: "city-greens-app.firebaseapp.com",
  projectId: "city-greens-app",
  storageBucket: "city-greens-app.appspot.com",
  messagingSenderId: "24988229861",
  appId: "1:24988229861:web:b969202f1d9e1bec96340c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
