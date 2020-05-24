import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/api';

function MovieDetails() {
  const { imdbID } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState('');

  async function fetchData() {
    const res = await API.get('/', {
      params: {
        i: imdbID,
      },
    });
    setIsLoading(false);

    setMovieDetails(res.data);
    console.log(res);
  }

  useEffect(() => {
    console.log('run');
    fetchData();
  }, []);

  const { Title, Year, Released, Runtime, Genre, Plot } = movieDetails;
  return (
    <div>
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
    </div>
  );
}

function Spinner() {
  return <h1>Loading...</h1>;
}

export default MovieDetails;
