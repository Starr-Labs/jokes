import React from 'react';

function Card({ joke }) {
  return (
    <div>
      <h2>{joke.topic}</h2>
      <p>{joke.joke}</p>
    </div>
  );
}

export default Card;
