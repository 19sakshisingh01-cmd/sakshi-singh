import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDt9MZ-5HbMdhxqDiX-ck-1CwjH_CpmLgM",
  authDomain: "axis--max-insurance.firebaseapp.com",
  projectId: "axis--max-insurance",
  storageBucket: "axis--max-insurance.firebasestorage.app",
  messagingSenderId: "983991986405",
  appId: "1:983991986405:web:5ebfb45ca1f7b92ceb0c0c"
};

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