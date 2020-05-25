import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieList(props) {
  const { movies } = props;
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <Link to={`/movies/${movie.imdbID}`}>
            {movie.Title}
            {movie.Year}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
