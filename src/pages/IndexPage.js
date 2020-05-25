import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Navbar from '../components/Navbar';
import API from '../utils/api';
import useInput from '../hooks/useInputState';
import useToggle from '../hooks/useToggleState';
import movieSeeders from '../utils/movie_seeders';

function IndexPage() {
  const [movies, setMovies] = useState(movieSeeders);
  const [searchValue, handleSearchValue, resetSearchValue] = useInput('');
  const [isLoading, toggleIsLoading] = useToggle(false);

  const handleSearch = async () => {
    toggleIsLoading();
    const res = await API.get('/', {
      params: { s: searchValue },
    });
    toggleIsLoading();
    setMovies(res.data.Search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    resetSearchValue();
  };

  return (
    <>
      <Navbar
        handleSubmit={handleSubmit}
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
      />
      <Container>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Switch>
            <Route exact path="/">
              <MovieList movies={movies} />
            </Route>
            <Route exact path="/movies/:imdbID">
              <MovieDetails />
            </Route>
            <Route render={() => <h1>404</h1>} />
          </Switch>
        )}
      </Container>
    </>
  );
}

export default IndexPage;
