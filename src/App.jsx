import './App.scss';
import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header/Header';
import cardImages from './data';
import CardGrid from './components/CardGrid/CardGrid';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const [bestScore, setBestScore] = useState(JSON.parse(localStorage.getItem('best_score') || 0));

  const allCardsMatched = useCallback(() => cards.every(card => card.matched), [cards]);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shuffledCards);
    setTurns(0);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);

    setTurns(prevTurns => prevTurns + 1);

    setDisabled(false);
  };

  const handleChoice = card => {
    if (choiceOne && choiceOne.id !== card.id) {
      setChoiceTwo(card);
    } else {
      setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards =>
          prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          })
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (cards.length > 0 && allCardsMatched() && (turns < bestScore || bestScore === 0)) {
      localStorage.setItem('best_score', JSON.stringify(turns));
      setBestScore(JSON.parse(localStorage.getItem('best_score')));
    }
  }, [cards, turns, bestScore, allCardsMatched]);

  return (
    <div className="App">
      <Header
        bestScore={bestScore}
        turns={turns}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        shuffleCards={shuffleCards}
      />

      <CardGrid
        cards={cards}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        disabled={disabled}
        handleChoice={handleChoice}
      />
    </div>
  );
}

export default App;
