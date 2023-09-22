import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function GuessSlot({ guessWord, answer }) {
  const result = checkGuess(guessWord, answer);
  return (
    <p className='guess'>
      {range(5).map((i) => (
        <Cell
          key={i}
          letter={result ? result[i].letter : undefined}
          status={result ? result[i].status : undefined}
        />
      ))}
    </p>
  );
}

export default GuessSlot;
