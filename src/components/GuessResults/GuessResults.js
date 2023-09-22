import React from 'react';

function GuessResults({ previousGuesses }) {
  return (
    <div className='guess-results'>
      {previousGuesses.map((guess, i) => (
        <p key={i} className='guess'>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
