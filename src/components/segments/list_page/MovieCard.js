/**
 * TODO: Reduce card border radius
 * TODO: Reduce chip border radius
 * TODO: Add rating
 * TODO: Add genre
 * TODO: Add time
 * * Styling
 * TODO: Hover card effect
 * TODO: Trailer, pass down the trailer link to movie detail
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Chip, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardImage from '../../CardImage';

const useStyles = makeStyles((theme) => ({
  chip: {
    marginTop: theme.spacing(1),
    textTransform: 'uppercase',
  },
  title: {
    ...theme.typography.title,
  },
  year: {
    color: 'grey',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginLeft: theme.spacing(1),
  },
  genres: {
    color: 'grey',
    fontWeight: '300',
  },
}));

function MovieCard(props) {
  const { title, year, imdbId, type, poster } = props;

  const classes = useStyles();
  return (
    <Grid container item xs={3}>
      <Grid item xs={12}>
        <Link to={`/movies/${imdbId}`}>
          <CardImage image={poster} />
        </Link>
        <Typography variant="h6" className={classes.title}>
          {title}
          <span className={classes.year}>{`(${year})`}</span>
        </Typography>
      </Grid>
    </Grid>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieCard;
