import React from 'react';
import ReactDOM from 'react-dom/client';
import RootApp from './RootApp'; // Assuming you renamed App to RootApp for clarity in routing setup
import './index.css'; // Assuming you have a main CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
);