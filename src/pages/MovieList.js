import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import MovieCard from '../components/segments/list_page/MovieCard';

function MovieList(props) {
  const { movies } = props;
  return (
    <Grid container spacing={4}>
      {movies.map((movie) => (
        <Grid container item xs={3} key={movie.imdbID}>
          <MovieCard
            title={movie.Title}
            year={movie.Year}
            imdbId={movie.imdbID}
            type={movie.Type}
            poster={movie.Poster}
          />
        </Grid>
      ))}
    </Grid>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
