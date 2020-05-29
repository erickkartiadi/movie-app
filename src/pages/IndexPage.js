import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import LoaderSpinner from '../components/shared/LoaderSpinner';
import ErrorPage from '../components/shared/ErrorPage';
import useInput from '../hooks/useInputState';
import useToggle from '../hooks/useToggleState';
import API from '../utils/api';
import { scrollTop } from '../utils/scroller';
import IndexPagination from '../components/IndexPagination';

function IndexPage() {
  const [movies, setMovies] = useState();
  const [
    searchInputValue,
    handleSearchInputValue,
    resetSearchInputValue,
  ] = useInput('');
  const [isLoading, toggleIsLoading] = useToggle(false);
  const [searchText, setSearchText] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [errorText, setErrorText] = useState('');
  const history = useHistory();

  const handleSearch = async (value, pages) => {
    toggleIsLoading();
    const res = await API.get('/', {
      params: { s: value, page: pages },
    });
    toggleIsLoading();
    const { Response } = res.data;
    if (Response === 'True') {
      const { totalResults, Search } = res.data;
      const numberOfPages = Math.ceil(totalResults / 10);
      setPageNumber(numberOfPages);
      setMovies(Search);
      scrollTop();
    } else {
      const { Error } = res.data;
      setErrorText(Error);
      history.push('/err');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInputValue, 1);
    setSearchText(searchInputValue);
    resetSearchInputValue();
    history.push('/');
  };

  const handlePageChange = (event, value) => {
    handleSearch(searchText, value);
  };

  return (
    <>
      <Navbar
        handleSubmit={handleSubmit}
        searchInputValue={searchInputValue}
        handleSearchInputValue={handleSearchInputValue}
      />
      <Container>
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <MovieList searchText={searchText} movies={movies} />
              </Route>
              <Route exact path="/err">
                <ErrorPage text={errorText} />
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
