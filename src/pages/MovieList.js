import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import MovieCard from '../components/segments/list_page/MovieCard';
import API from '../utils/api';

function MovieList(props) {
  const { movies, searchText } = props;

  return (
    <>
      <h3>
        Search:
        {searchText}
      </h3>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            imdbId={movie.imdbID}
            type={movie.Type}
            poster={movie.Poster}
          />
        ))}
      </Grid>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default MovieList;
