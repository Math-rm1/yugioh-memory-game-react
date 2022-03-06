import React from 'react';
import propTypes from 'prop-types';
import Card from '../Card/Card';
import './CardGrid.scss';
import cardShape from '../../types';

function CardGrid({ cards, handleChoice, choiceOne, choiceTwo, disabled }) {
  return (
    <div className="card-grid">
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default CardGrid;

CardGrid.propTypes = {
  cards: propTypes.arrayOf(cardShape),
  handleChoice: propTypes.func.isRequired,
  choiceOne: cardShape,
  choiceTwo: cardShape,
  disabled: propTypes.bool.isRequired,
};

CardGrid.defaultProps = {
  cards: [],
  choiceOne: null,
  choiceTwo: null,
};
