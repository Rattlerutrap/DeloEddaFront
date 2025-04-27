// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import './styles/main.css';
export const API_URL = "http://127.0.0.1:8000/api/furniture/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to measure performance
// reportWebVitals();