// firebase-config.js
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

// ✅ CONFIGURAZIONE FIREBASE — SENZA SPAZI, CORRETTA
const firebaseConfig = {
  apiKey: "AIzaSyAuI6bc_0gCTFUrzvEc-A8P3q7yNuCl3gE",
  authDomain: "cambiolink-d5ee2.firebaseapp.com",
  databaseURL: "https://cambiolink-d5ee2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cambiolink-d5ee2",
  storageBucket: "cambiolink-d5ee2.firebasestorage.app",
  messagingSenderId: "185948156147",
  appId: "1:185948156147:web:c9ade8ca9eb14c707d8786"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ ✅ ✅ URL CORRETTO — SENZA UNO SPAZIO IN PIÙ
const db = getDatabase(app, "https://cambiolink-d5ee2-default-rtdb.europe-west1.firebasedatabase.app");

export { auth, provider, db };