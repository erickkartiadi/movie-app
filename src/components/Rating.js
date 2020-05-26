import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import MuiRating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& h6': {
      color: '#ffb400',
      fontWeight: '599',
      marginLeft: theme.spacing(1),
    },
  },
}));

function Rating({ value, precision }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiRating
        name="read-only"
        value={parseFloat(value) / 2}
        precision={precision}
        readOnly
      />
      <Typography variant="subtitle1">{value}</Typography>
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.string.isRequired,
  precision: PropTypes.number.isRequired,
};

export default Rating;
