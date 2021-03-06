import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import useToggle from '../hooks/useToggleState';
import API from '../utils/api';
import CardImage from '../components/CardImage';
import MovieSummary from '../components/segments/detail_page/MovieSummary';
import RatingScore from '../components/segments/detail_page/RatingScore';
import CastAvatar from '../components/segments/detail_page/CastAvatar';
import LoaderSpinner from '../components/shared/LoaderSpinner';

const useStyles = makeStyles((theme) => ({
  trailer: {
    display: 'flex',
    justifyContent: 'center',
  },
  rowHead: {
    fontFamily: theme.typography.title,
  },
}));

function MovieDetails() {
  const { imdbID } = useParams();
  const [isLoading, toggleIsLoading] = useToggle(true);
  const [movieDetails, setMovieDetails] = useState([]);
  async function fetchData() {
    const res = await API.get('/', {
      params: {
        i: imdbID,
      },
    });

    setMovieDetails(res.data);
    toggleIsLoading();
  }

  useEffect(() => {
    fetchData();
  }, []);

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    imdbRating,
  } = movieDetails;

  const classes = useStyles();
  return !isLoading ? (
    <Grid container direction="column" spacing={6}>
      <Grid item container spacing={4}>
        <Grid item xs={3}>
          <CardImage image={Poster}>
            <CardActions className={classes.trailer}>
              <Button
                component="a"
                href="https://facebook.com"
                target="_blank"
                size="small"
                color="primary"
                startIcon={<PlayCircleFilledIcon />}
              >
                Go To Trailer
              </Button>
            </CardActions>
          </CardImage>
        </Grid>
        <Grid item xs={9}>
          <MovieSummary
            title={Title}
            year={Year}
            imdbRating={imdbRating}
            runtime={Runtime}
            released={Released}
            genre={Genre}
            rated={Rated}
            director={Director}
            writer={Writer}
            country={Country}
            language={Language}
            awards={Awards}
          />
        </Grid>
      </Grid>

      <Grid item container>
        <Grid item xs={3}>
          <h3 className={classes.rowHead}>Plot</h3>
        </Grid>
        <Grid item xs={9}>
          <p>{Plot}</p>
        </Grid>
      </Grid>

      <Grid item container>
        <Grid item xs={3}>
          <h3 className={classes.rowHead}>Ratings</h3>
        </Grid>
        <Grid container item xs={9} spacing={2}>
          <RatingScore ratings={Ratings} />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={3}>
          <h3 className={classes.rowHead}>Cast</h3>
        </Grid>
        <Grid item xs={9} container direction="row" justify="flex-start">
          <CastAvatar actors={Actors} />
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <LoaderSpinner />
  );
}

export default MovieDetails;
