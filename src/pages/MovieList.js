import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import MovieCard from '../components/segments/list_page/MovieCard';
import NoMovie from '../components/shared/NoMovie';

function MovieList(props) {
  const { movies, searchText } = props;

  return movies ? (
    <>
      <h3>{`Search: ${searchText}`}</h3>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <MovieCard
            key={uuidv4()}
            title={movie.Title}
            year={movie.Year}
            imdbId={movie.imdbID}
            type={movie.Type}
            poster={movie.Poster}
          />
        ))}
      </Grid>
    </>
  ) : (
    <NoMovie />
  );
}

MovieList.defaultProps = {
  searchText: '',
  movies: undefined,
};

MovieList.propTypes = {
  movies: PropTypes.array,
  searchText: PropTypes.string,
};

export default MovieList;
