import React from 'react';
import propTypes from 'prop-types';
import cardShape from '../../types';
import CardChoice from '../CardChoice/CardChoice';
import './HeaderInfo.scss';

function HeaderInfo({ choiceOne, choiceTwo, turns, bestScore }) {
  return (
    <div className="header-info">
      <h4>Turns: {turns}</h4>
      <h4>Best Score: {bestScore}</h4>

      <CardChoice choice={choiceOne} />
      <CardChoice choice={choiceTwo} />
    </div>
  );
}

export default HeaderInfo;

HeaderInfo.propTypes = {
  choiceOne: cardShape,
  choiceTwo: cardShape,
  turns: propTypes.number.isRequired,
  bestScore: propTypes.number.isRequired,
};

HeaderInfo.defaultProps = {
  choiceOne: null,
  choiceTwo: null,
};
