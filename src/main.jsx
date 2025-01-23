import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import firebase from 'firebase/compat/app'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "tienda-retro.firebaseapp.com",
  projectId: "tienda-retro",
  storageBucket: "tienda-retro.firebasestorage.app",
  messagingSenderId: "561226306735",
  appId: "1:561226306735:web:e31e8626a1f9f16586f05a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
