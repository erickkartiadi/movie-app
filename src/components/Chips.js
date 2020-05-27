import React from 'react';
import { Chip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// TODO: change the variant
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    '&>div': {
      marginRight: theme.spacing(1),
    },
  },
}));
function Chips({ runtime, released, genre }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip label={runtime} variant="outlined" />
      <Chip label={released} variant="outlined" />
      <Chip label={genre} variant="outlined" />
    </div>
  );
}

Chips.propTypes = {
  runtime: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Chips;
