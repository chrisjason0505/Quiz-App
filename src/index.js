import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' exists in your HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

