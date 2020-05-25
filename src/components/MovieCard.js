import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
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
      <Typography variant="h6">{title}</Typography>
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
