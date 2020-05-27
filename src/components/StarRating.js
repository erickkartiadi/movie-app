import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import MuiRating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    display: 'flex',
    '& h6': {
      color: 'slateblue',
      fontWeight: '500',
      fontSize: '1.2rem',
      marginLeft: theme.spacing(2),
    },
    position: 'relative',
    right: 2,
  },
}));

function StarRating({ value, precision }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiRating
        size="large"
        name="read-only"
        value={parseFloat(value) / 2}
        precision={precision}
        readOnly
      />
      <Typography variant="subtitle1">{value}</Typography>
    </div>
  );
}

StarRating.propTypes = {
  value: PropTypes.string.isRequired,
  precision: PropTypes.number.isRequired,
};

export default StarRating;
