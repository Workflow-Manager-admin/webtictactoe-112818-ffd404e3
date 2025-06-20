import React from 'react';
import './App.css';
import WebTicTacToeContainer from './WebTicTacToeContainer';

function App() {
  // Main app: Only renders navbar and the centered Tic Tac Toe container.
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn" tabIndex={-1} aria-hidden="true" style={{ opacity: 0.45, pointerEvents: 'none' }}>
              Feature Disabled
            </button>
          </div>
        </div>
      </nav>
      <main>
        <div className="container" style={{ display: "flex", minHeight: "95vh", alignItems: "center", justifyContent: "center" }}>
          <WebTicTacToeContainer />
        </div>
      </main>
    </div>
  );
}

export default App;