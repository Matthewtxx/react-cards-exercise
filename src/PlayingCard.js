// src/PlayingCard.js

import React from 'react';
import useFlip from './hooks';

function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div
      className={`PlayingCard Card ${isFlipped ? 'flipped' : ''}`}
      onClick={toggleFlip}
    >
      <div className="PlayingCard-inner">
        <div className="PlayingCard-front">
          <img src={front} alt="playing card" />
        </div>
        <div className="PlayingCard-back">
          <img src={back} alt="card back" />
        </div>
      </div>
    </div>
  );
}

export default PlayingCard;