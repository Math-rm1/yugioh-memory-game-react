import './CardChoice.scss';
import React from 'react';
import cardShape from '../../types';

function CardChoice({ choice }) {
  return (
    <div className="choice">
      {choice ? (
        <img className="choice-img" src={choice.src} alt="choice" />
      ) : (
        <img className="choice-img" src="/img/cover.jpg" alt="not selected" />
      )}
    </div>
  );
}

CardChoice.propTypes = {
  choice: cardShape,
};

CardChoice.defaultProps = {
  choice: null,
};

export default CardChoice;
