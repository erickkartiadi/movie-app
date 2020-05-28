import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import useInput from '../hooks/useInputState';
import useToggle from '../hooks/useToggleState';
import API from '../utils/api';
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
  // TODO: search filter
  // TODO: Add Loading Condition
  // TODO: handle back to index page
  // TODO: search while on movie details
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
      <Footer />
    </>
  );
}

export default IndexPage;
