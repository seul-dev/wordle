import React from 'react';

function GuessInput({ handlePreviousGuess }) {
  const [guess, setGuess] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    handlePreviousGuess(guess);
    setGuess('');
  };
  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        required
        pattern='[A-Z]{5}'
        id='guess-input'
        type='text'
        title='5 letter word'
      />
    </form>
  );
}

export default GuessInput;
