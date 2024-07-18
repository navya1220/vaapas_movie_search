// src/components/MovieCard.js

import React from 'react';

const MovieCard = ({ movie, dogImage }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.author_name?.join(', ')}</p>
      <img src={dogImage} alt="Random Dog" />
    </div>
  );
};

export default MovieCard;
