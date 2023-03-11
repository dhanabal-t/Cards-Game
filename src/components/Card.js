import React, { useState, useEffect } from "react";

export function Card({ img, title, shuffle, updateScore, resetScore, shouldReset, setShouldReset }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (shouldReset === true) {
      setIsClicked(false);
      setShouldReset(false);
    }
  });

  return (
    <div onClick={async () => {
      shuffle();
      if (isClicked) {
        resetScore();
        setShouldReset(true);
        return;
      }
      updateScore();
      setIsClicked(true);
    }}>
      <div className="gradient-overlay">
        <p>{title}</p>
      </div>
      <img src={img}/>
    </div>
  );
}
