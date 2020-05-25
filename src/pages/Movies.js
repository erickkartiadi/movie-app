import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInputState';
import useToggle from '../hooks/useToggleState';
import MovieList from '../components/MovieList';
import API from '../utils/api';

function MovieApp(props) {
  const { movies, isLoading } = props;
  return (
    <>
      {movies.length <= 0 && !isLoading && <h1>Empty</h1>}
      {isLoading && <h1>Loading</h1>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}

MovieApp.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default MovieApp;
