import './Header.scss';
import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button/Button';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import cardShape from '../../types';

function Header({ bestScore, turns, choiceOne, choiceTwo, shuffleCards }) {
  return (
    <header className="header">
      <h1 className="header-title">
        Yu-Gi-Oh
        <br />
        Memory Game
      </h1>
      <Button shuffleCards={shuffleCards} />
      <HeaderInfo turns={turns} bestScore={bestScore} choiceOne={choiceOne} choiceTwo={choiceTwo} />
    </header>
  );
}

export default Header;

Header.propTypes = {
  bestScore: propTypes.number.isRequired,
  turns: propTypes.number.isRequired,
  choiceOne: cardShape,
  choiceTwo: cardShape,
  shuffleCards: propTypes.func.isRequired,
};

Header.defaultProps = {
  choiceOne: null,
  choiceTwo: null,
};
