import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRESTORE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

