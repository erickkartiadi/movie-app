import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import calcRating from '../utils/ratingCalculator';

const useStyles = makeStyles((theme) => ({
  theCanvas: {
    width: '100%',
    height: 'auto',
  },
  circle: {
    transition: 'stroke-dashoffset 2s ease-in-out',
    transform: 'rotate(-90deg)',
    transformOrigin: '50% 50%',
  },
  ratingText: {
    fontSize: '5rem',
    fontFamily: 'Roboto',
  },
}));

function CircleRatingSVG({ value, source }) {
  const radius = 200;
  const circumference = (Math.PI * radius * 2).toFixed();
  const [progress, setProgress] = useState(circumference);

  useEffect(() => {
    setProgress(calcRating(value, source, circumference));
  }, []);

  const classes = useStyles();
  return (
    <Grid container item xs={2} justify="center">
      <svg className={classes.theCanvas} viewBox="0 0 500 500">
        <circle
          className={classes.circle}
          stroke="green"
          strokeWidth="10"
          fill="transparent"
          cx="250"
          cy="250"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progress}
        />
        <text
          className={classes.ratingText}
          x="50%"
          y="55%"
          textAnchor="middle"
        >
          {value}
        </text>
      </svg>
      <h5 style={{ textAlign: 'center' }}>{source}</h5>
    </Grid>
  );
}

CircleRatingSVG.propTypes = {
  value: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default CircleRatingSVG;
