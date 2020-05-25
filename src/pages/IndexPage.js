import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Navbar from '../components/Navbar';
import API from '../utils/api';
import useInput from '../hooks/useInputState';
import useToggle from '../hooks/useToggleState';

function IndexPage() {
  const [movies, setMovies] = useState([]);
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
        <Switch>
          <Route exact path="/">
            <Movies movies={movies} isLoading={isLoading} />
          </Route>
          <Route exact path="/movies/:imdbID">
            <MovieDetails />
          </Route>
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Container>
    </>
  );
}

export default IndexPage;
