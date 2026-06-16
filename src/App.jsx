/* src/App.jsx - Main application component entry point */
import React from 'react';
import RootApp from './RootApp'; // RootApp handles routing and context providers

function App() {
  // App.jsx is now minimal, acting as a simple wrapper that renders RootApp
  return (
    <RootApp /> 
  );
}

export default App;