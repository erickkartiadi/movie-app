import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CircleRatingSVG from './CircleRatingSVG';

function RatingScore({ ratings }) {
  return (
    <>
      <Grid item xs={3}>
        <h2>Ratings</h2>
      </Grid>
      <Grid container item xs={9} spacing={2}>
        {ratings.map((rating) => {
          return (
            <CircleRatingSVG
              value={rating.Value}
              source={rating.Source}
              key={`${rating.Value}-${rating.Source.replace(/\s/g, '')}`}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default RatingScore;
RatingScore.propTypes = {
  ratings: PropTypes.array.isRequired,
};
