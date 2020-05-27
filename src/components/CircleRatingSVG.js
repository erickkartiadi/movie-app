import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  circle: {
    transition: 'stroke-dashoffset 0.35s',
    transform: 'rotate(-90deg)',
    transformOrigin: '50% 50%',
  },
}));

function CircleRatingSVG({ value, source }) {
  const radius = 200;
  const circumference = Math.PI * radius * 2;
  const classes = useStyles();
  return (
    <Grid container item xs={2} justify="center">
      <svg
        style={{
          width: '100%',
          height: 'auto',
        }}
        viewBox="0 0 500 500"
      >
        <circle
          className={classes.circle}
          stroke="gold"
          strokeWidth="10"
          fill="transparent"
          cx="250"
          cy="250"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset="628"
        />
      </svg>
      <h5 style={{ textAlign: 'center' }}>{source}</h5>
    </Grid>
  );
}

export default CircleRatingSVG;
