// src/CardTable.js

import React from 'react';
import useAxios from './hooks'; // Import the custom hook
import PlayingCard from './PlayingCard';
import { v1 as uuid } from 'uuid';
import './PlayingCardList.css';

function CardTable() {
  const [cards, addCard] = useAxios('https://deckofcardsapi.com/api/deck/new/draw/');

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
