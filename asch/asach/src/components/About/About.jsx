import React, { useState } from 'react';

const About = () => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const incrementScoreby1 = () => setPlayer1Score(player1Score + 1);
  const incrementScoreby4 = () => setPlayer1Score(player1Score + 4);
  const incrementScoreby6 = () => setPlayer1Score(player1Score + 6);
  const decrementPlayer1 =  () => setPlayer1Score(player1Score > 0 ? player1Score - 1 : 0);

  const IncrementScoreby1 = () => setPlayer2Score(player2Score + 1);
  const IncrementScoreby4 = () => setPlayer2Score(player2Score + 4);
  const IncrementScoreby6 = () => setPlayer2Score(player2Score + 6);
  const DecrementPlayer1 =  () => setPlayer2Score(player2Score > 0 ? player2Score - 1 : 0);
  return (
    <div>
      <h2>Scoreboard</h2>
     
        <h3>Player: {player1Score}</h3>
        <button onClick={incrementScoreby1}>+1</button>
        <button onClick={incrementScoreby4}>+4</button>
        <button onClick={incrementScoreby6}>+6</button>
        <button onClick={decrementPlayer1}>-1</button>

        <h3>Player: {player2Score}</h3>
        <button onClick={IncrementScoreby1}>+1</button>
        <button onClick={IncrementScoreby4}>+4</button>
        <button onClick={IncrementScoreby6}>+6</button>
        <button onClick={DecrementPlayer1}>-1</button>
    
    </div>
  );
};

export default About;