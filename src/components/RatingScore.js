import React from 'react';
import PropTypes from 'prop-types';
import CircleRatingSVG from './CircleRatingSVG';

function RatingScore({ ratings }) {
  return (
    <>
      {ratings.map((rating) => {
        return (
          <CircleRatingSVG
            value={rating.Value}
            source={rating.Source}
            key={`${rating.Value}-${rating.Source.replace(/\s/g, '')}`}
          />
        );
      })}
    </>
  );
}

export default RatingScore;
RatingScore.propTypes = {
  ratings: PropTypes.array.isRequired,
};
