// src/components/MovieList.js

import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ movies, dogImages }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} dogImage={dogImages[index]} />
      ))}
    </div>
  );
};

export default MovieList;
