import './Button.scss';
import React from 'react';
import propTypes from 'prop-types';

function Button({ shuffleCards }) {
  return (
    <button type="button" className="btn" onClick={shuffleCards}>
      Restart Game
    </button>
  );
}
export default Button;

Button.propTypes = {
  shuffleCards: propTypes.func.isRequired,
};
