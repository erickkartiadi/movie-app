import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  CardMedia,
  CardActionArea,
  Grid,
  Chip,
} from '@material-ui/core';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 444,
  },
  chip: {
    marginTop: theme.spacing(1),
    textTransform: 'uppercase',
  },
}));

function MovieCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const { title, year, imdbId, type, poster } = props;

  const handleNavigate = () => {
    history.push(`/movies/${imdbId}`);
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardActionArea onClick={handleNavigate}>
          <CardMedia className={classes.media} image={poster} />
        </CardActionArea>
      </Card>
      <Typography variant="h6">
        {title}
        <Typography variant="subtitle2">{year}</Typography>
      </Typography>
      <Chip className={classes.chip} label={type} />
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
