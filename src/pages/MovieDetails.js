import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/api';
import useToggle from '../hooks/useToggleState';

function MovieDetails() {
  const { imdbID } = useParams();
  const [isLoading, toggleIsLoading] = useToggle(true);
  const [movieDetails, setMovieDetails] = useState('');

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

  useEffect(() => {
    fetchData();
  }, []);

  const { Title, Year } = movieDetails;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>Movie</h1>
          <h2>
            {Title}
            {Year}
          </h2>
        </>
      )}
    </>
  );
}

function Spinner() {
  return <h1>Loading...</h1>;
}

export default MovieDetails;
