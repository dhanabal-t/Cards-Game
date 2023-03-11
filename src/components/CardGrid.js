import React, { useState, useEffect } from "react";
import cloud_gate from '../images/cloud-gate.jpg';
import nyc_skyline from '../images/nyc-skyline.jpg';
import central_park from '../images/central-park.jpg';
import chicago_skyline from '../images/chicago-skyline.jpg';
import dolores_park from '../images/dolores-park-sf.jpg';
import golden_gate_bridge from '../images/golden-gate-bridge.jpg';
import painted_ladies from '../images/painted-ladies-sf.jpg';
import times_square from '../images/times-square.jpg';
import { Card } from "./Card";

const images = [
  {
    img: cloud_gate,
    title: "The Bean"
  },
  {
    img: nyc_skyline,
    title: "Skyline of Manhattan"
  },
  {
    img: central_park,
    title: "Central Park"
  },
  {
    img: chicago_skyline,
    title: "Skyline of Chicago"
  },
  {
    img: dolores_park,
    title: "Dolores Park, SF"
  },
  {
    img: golden_gate_bridge,
    title: "Golden Gate Bridge"
  },
  {
    img: painted_ladies,
    title: "Painted Ladies, SF"
  },
  {
    img: times_square,
    title: "Times Square"
  }
]

export function CardGrid({ updateScore, resetScore }) {
  const [shuffledImages, setshuffledImages] = useState([]);
  const [shouldReset, setShouldReset] = useState(false);

  function shuffleImages() {
    setshuffledImages([...images].sort(() => Math.random()-0.4));
  }

  useEffect(() => {
    shuffleImages();
  }, []);

  return (
    <div className="card-grid">
      {shuffledImages.map(({img, title}) => (
        <Card shouldReset={shouldReset} setShouldReset={setShouldReset} updateScore={() => updateScore()} resetScore={() => resetScore()} shuffle={() => shuffleImages()} key={title} img={img} title={title}/>
      ))}
    </div>
  );
}
