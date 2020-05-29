import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardImage from '../../CardImage';
import { scrollTop } from '../../../utils/scroller';
import BorderChip from '../../BorderChip';

const useStyles = makeStyles((theme) => ({
  chip: {
    marginTop: theme.spacing(1),
    textTransform: 'uppercase',
  },
  title: {
    ...theme.typography.title,
  },
  year: {
    color: theme.palette.primary.dark,
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginLeft: theme.spacing(1),
  },
}));

function MovieCard(props) {
  const { title, year, imdbId, type, poster } = props;

  const classes = useStyles();
  return (
    <Grid container item xs={3}>
      <Grid item xs={12}>
        <Link onClick={scrollTop} to={`/movies/${imdbId}`}>
          <CardImage image={poster} />
        </Link>
        <Typography variant="h6" className={classes.title}>
          {title}
          <span className={classes.year}>{`(${year})`}</span>
        </Typography>
        <BorderChip
          className={classes.chip}
          variant="outlined"
          color="secondary"
          label={type}
        />
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
