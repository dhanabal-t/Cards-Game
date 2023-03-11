import React, { useState, useEffect } from "react";
import { CardGrid } from "./components/CardGrid";
 
import { Navbar } from "./components/Navbar";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function updateScore() {
    setScore(score + 1);
  }

  useEffect(() => {
    score > bestScore && setBestScore(score);
  }, [score]);

  return (
    <div className="app">
      <Navbar score={score} bestScore={bestScore} />
      <CardGrid updateScore={() => updateScore()} resetScore={() => setScore(0)} />
       
    </div>
  );
}
