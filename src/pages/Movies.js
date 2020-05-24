import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/api';
import useInput from '../hooks/useInputState';

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

    const movieResults = res.data.Search;
    setMovies(movieResults);

    console.log(res);
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
      {movies.length <= 0 && !isLoading && <h1>Please Search</h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <Link to={`/movies/${movie.imdbID}`}>
                  {movie.Title}
                  {movie.Year}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default MovieApp;
