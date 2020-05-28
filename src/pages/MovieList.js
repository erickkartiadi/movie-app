import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import MovieCard from '../components/segments/list_page/MovieCard';
import API from '../utils/api';
import useToggle from '../hooks/useToggleState';

function MovieList(props) {
  const { movies } = props;

  return (
    <>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            imdbId={movie.imdbID}
            type={movie.Type}
            poster={movie.Poster}
            // handleClick={handleClick}
          />
        ))}
      </Grid>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
