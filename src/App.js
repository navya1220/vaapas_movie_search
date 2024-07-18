
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/movieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [dogImages, setDogImages] = useState([]);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      const movieData = response.data.docs;
      setMovies(movieData);

      const dogImagePromises = movieData.map(() => axios.get('https://dog.ceo/api/breeds/image/random'));
      const dogImageResponses = await Promise.all(dogImagePromises);
      const dogImageUrls = dogImageResponses.map(response => response.data.message);
      setDogImages(dogImageUrls);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="movieApp">
      <h1>Movie App</h1>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} dogImages={dogImages} />
    </div>
  );
};

export default App;
