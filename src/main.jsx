
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "tienda-retro.firebaseapp.com",
  projectId: "tienda-retro",
  storageBucket: "tienda-retro.firebasestorage.app",
  messagingSenderId: "561226306735",
  appId: "1:561226306735:web:e31e8626a1f9f16586f05a"
};


initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
