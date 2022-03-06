import './Card.scss';
import React from 'react';
import propTypes from 'prop-types';
import cardShape from '../../types';

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled && !flipped) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <input type="image" className="card-img front" src={card.src} alt="card front" />

        <input
          type="image"
          className="card-img back"
          src="/img/cover.jpg"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  handleChoice: propTypes.func.isRequired,
  flipped: propTypes.bool.isRequired,
  disabled: propTypes.bool.isRequired,
  card: cardShape,
};

Card.defaultProps = {
  card: null,
};
