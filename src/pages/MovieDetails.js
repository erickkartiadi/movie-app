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
import {
  Card,
  Typography,
  CardMedia,
  CardActionArea,
  Grid,
  Chip,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import useToggle from '../hooks/useToggleState';
import API from '../utils/api';
import detailSeeder from '../utils/movie_detail_seeder';
import NoBorderCell from '../components/NoBorderCell';
import CardImage from '../components/CardImage';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 444,
  },
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
  const [movieDetails, setMovieDetails] = useState(detailSeeder);

  // #region Actual Logic
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await API.get('/', {
  //       params: {
  //         i: imdbID,
  //       },
  //     });
  //     toggleIsLoading();

  //     setMovieDetails(res.data);
  //     console.log(res);
  //   }
  //   fetchData();
  //   console.log('run');
  // }, []);
  // #endregion

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

        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <NoBorderCell>Rating</NoBorderCell>
                <NoBorderCell>{Rated}</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell>Directed By</NoBorderCell>
                <NoBorderCell>{Director}</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell>Written By</NoBorderCell>
                <NoBorderCell>{Writer}</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell>Release Date</NoBorderCell>
                <NoBorderCell>
                  {Released}
                  in
                  {Country}
                </NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell>Language</NoBorderCell>
                <NoBorderCell>{Language}</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell>Awards</NoBorderCell>
                <NoBorderCell>{Awards}</NoBorderCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.rating}>
          <Rating
            name="read-only"
            value={imdbRating / 2}
            precision={0.1}
            readOnly
          />
          <Typography variant="subtitle1">{imdbRating}</Typography>
        </div>
      </Grid>
    </Grid>
  );
}

function Spinner() {
  return <h1>Loading...</h1>;
}

export default MovieDetails;
