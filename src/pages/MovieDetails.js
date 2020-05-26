/**
 * TODO: Genres
 * TODO: Navigate to trailer
 * TODO: Score
 * TODO: Cast
 * TODO: Summary
 * TODO: release date
 * TODO: Loading
 * TODO: Chip
 * TODO: align the rating
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '../components/Rating';
import useToggle from '../hooks/useToggleState';
import API from '../utils/api';
// import detailSeeder from '../utils/movie_detail_seeder';
import MovieDetailTable from '../components/MovieDetailTable';
import CardImage from '../components/CardImage';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
  },
  year: {
    color: 'grey',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  genres: {
    marginTop: theme.spacing(1),
    fontWeight: '500',
  },
  rating: {
    display: 'flex',
    '& h6': {
      color: '#ffb400',
      fontWeight: '599',
      marginLeft: theme.spacing(1),
    },
  },
}));

function MovieDetails() {
  const { imdbID } = useParams();
  const [isLoading, toggleIsLoading] = useToggle(false);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await API.get('/', {
        params: {
          i: imdbID,
        },
      });
      toggleIsLoading();

      setMovieDetails(res.data);
      console.log(res);
    }
    fetchData();
    console.log('run');
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
    Metascore,
    imdbRating,
    imdbVotes,
    Type,
  } = movieDetails;

  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <CardImage image={Poster} />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h2" className={classes.title}>
          {Title}
          {'   '}
          <span className={classes.year}>{`(${Year})`}</span>
        </Typography>
        <Typography variant="subtitle1" className={classes.genres}>
          {Genre}
        </Typography>

        <MovieDetailTable
          rated={Rated}
          director={Director}
          writer={Writer}
          released={Released}
          country={Country}
          language={Language}
          awards={Awards}
        />
        <Rating value={imdbRating} precision={0.2} />
      </Grid>
    </Grid>
  );
}

export default MovieDetails;
