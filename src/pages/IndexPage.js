import React, { useReducer, useState, useRef } from 'react';
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
import IndexPagination from '../components/IndexPagination';

// TODO: search filter
// TODO: Add Loading Condition
// TODO: handle back to index page
// TODO: search while on movie details
// TODO: navigate to top button

function IndexPage() {
  const [movies, setMovies] = useState(movieSeeders);

  const [searchValue, handleSearchValue, resetSearchValue] = useInput('');
  const [isLoading, toggleIsLoading] = useToggle(false);
  const [searchText, setSearchText] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = async () => {
    toggleIsLoading();
    const res = await API.get('/', {
      params: { s: searchValue, page: 1 },
    });
    toggleIsLoading();
    const { totalResults, Search } = res.data;
    const numberOfPages = Math.ceil(totalResults / 10);
    setPageNumber(numberOfPages);
    setMovies(Search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    setSearchText(searchValue);
    resetSearchValue();
  };

  const loadMoreMovies = (newMovies) => {
    setMovies((prev) => [...prev, ...newMovies]);
  };

  const handlePageChange = async (event, value) => {
    toggleIsLoading();
    const res = await API.get('/', {
      params: { s: searchText, page: value },
    });
    toggleIsLoading();
    setMovies(res.data.Search);
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
          <>
            <h3>
              Search:
              {searchText}
            </h3>
            <Switch>
              <Route exact path="/">
                <MovieList movies={movies} loadMoreMovies={loadMoreMovies} />
              </Route>
              <Route exact path="/movies/:imdbID">
                <MovieDetails />
              </Route>
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </>
        )}
        <IndexPagination
          pageNumber={pageNumber}
          handlePageChange={handlePageChange}
        />
      </Container>
      <Footer />
    </>
  );
}

export default IndexPage;
