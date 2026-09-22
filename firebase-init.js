import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwl2EJEeQk-jM_-1hdKRdCR30OZLp6dPM",
  authDomain: "smart-teacher-1784b.firebaseapp.com",
  projectId: "smart-teacher-1784b",
  storageBucket: "smart-teacher-1784b.firebasestorage.app",
  messagingSenderId: "372250987505",
  appId: "1:372250987505:web:65e7ed912590c406429250"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  console.log("وضع عدم الاتصال مفعل محلياً");
});

window.db = db;
