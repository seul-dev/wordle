import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import GuessSlot from '../GuessSlot';

function GuessResults({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <GuessSlot key={i} guessWord={guesses[i]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
