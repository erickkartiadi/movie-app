import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MovieDetailTable from './MovieDetailTable';
import StarRating from '../../StarRating';

import Chips from '../../Chips';

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.typography.title,
  },
  year: {
    color: 'grey',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginLeft: theme.spacing(2),
  },
  table: {
    marginTop: theme.spacing(3),
  },
}));

function MovieSummary({
  title,
  year,
  imdbRating,
  runtime,
  released,
  genre,
  rated,
  director,
  writer,
  country,
  language,
  awards,
}) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" className={classes.title}>
        {title}
        <span className={classes.year}>{`(${year})`}</span>
      </Typography>
      <StarRating value={imdbRating} precision={0.2} />
      <Chips runtime={runtime} released={released} genre={genre} />
      <MovieDetailTable
        className={classes.table}
        genre={genre}
        runtime={runtime}
        rated={rated}
        director={director}
        writer={writer}
        released={released}
        country={country}
        language={language}
        awards={awards}
      />
    </>
  );
}

MovieSummary.propTypes = {
  rated: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  awards: PropTypes.string.isRequired,
  imdbRating: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieSummary;
