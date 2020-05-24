import React, { useState } from 'react';
import API from '../utils/api';
import useInput from '../hooks/useInputState';
import MovieList from '../components/MovieList';

function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [searchValue, handleSearchValue] = useInput('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    const res = await API.get('/', {
      params: { s: searchValue },
    });
    setIsLoading(false);
    setMovies(res.data.Search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          value={searchValue}
          onChange={handleSearchValue}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length <= 0 && !isLoading && <h1>Empty</h1>}
      {isLoading && <h1>Loading</h1>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}

export default MovieApp;
