// src/PokemonCard.js

import React from 'react';
import useFlip from './hooks'; // Import the custom hook

function PokemonCard({ front, back, name, stats }) {
  const [isFlipped, toggleFlip] = useFlip(); // Use the useFlip hook

  return (
    <div
      className={`PokemonCard Card ${isFlipped ? 'flipped' : ''}`}
      onClick={toggleFlip}
    >
      <div className="PokemonCard-inner">
        <div className="PokemonCard-front">
          <img src={front} alt={`${name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="PokemonCard-back">
          <img src={back} alt={`${name} back`} />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;