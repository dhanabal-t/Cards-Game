import React from "react";

export function Navbar({ score, bestScore }) {
  return (
    <div className="navbar">
      <h1>Card Game</h1>
      <div className="score-container">
        <div><p>Current Score: {score}</p></div>
        <div><p>Best Score: {bestScore}</p></div>
      </div>
    </div>
  );
}
