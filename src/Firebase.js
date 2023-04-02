import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPO9-Xe1BRuxthgUf7wKUK54oL-9Lk0Zg",
  authDomain: "adminproject-e481d.firebaseapp.com",
  projectId: "adminproject-e481d",
  storageBucket: "adminproject-e481d.appspot.com",
  messagingSenderId: "413430036449",
  appId: "1:413430036449:web:da887b65440369a8e984a0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
