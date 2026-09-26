import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTo6ztc3Amd69CSb0ruxKpuwciQXOOgZY",
  authDomain: "hdfc-f6e10.firebaseapp.com",
  projectId: "hdfc-f6e10",
  storageBucket: "hdfc-f6e10.firebasestorage.app",
  messagingSenderId: "898115663077",
  appId: "1:898115663077:web:22eeecd651307ab80c100c",
  measurementId: "G-2B6ER6MXTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.db = db;
window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;

export {
  db,
  doc,
  setDoc,
  getDoc
};
