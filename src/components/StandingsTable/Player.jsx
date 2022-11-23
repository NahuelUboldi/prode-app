import React from 'react';

function Player({
  name,
  points,
  guessed_scores,
  guessed_results,
  position,
  corruption,
}) {
  console.log({
    name,
    points,
    guessed_scores,
    guessed_results,
    position,
    corruption,
  });
  console.log('hola');

  return (
    <tr>
      <td>{position}</td>
      <td>{name}</td>
      <td>{points}</td>
      <td>{guessed_results}</td>
      <td>{guessed_scores}</td>
      <td>{corruption}</td>
    </tr>
  );
}

export default Player;
