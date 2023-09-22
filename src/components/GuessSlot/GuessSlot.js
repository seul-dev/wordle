import React from 'react';
import { range } from '../../utils';

function GuessSlot({ guessWord = '' }) {
  return (
    <p className='guess'>
      {range(5).map((i) => (
        <span key={i} className='cell'>
          {guessWord[i]}
        </span>
      ))}
    </p>
  );
}

export default GuessSlot;
