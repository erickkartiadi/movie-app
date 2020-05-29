import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BorderChip from './BorderChip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
      <BorderChip label={runtime} color="secondary" />
      <BorderChip label={released} color="secondary" />
      <BorderChip label={genre} color="secondary" />
    </div>
  );
}

Chips.propTypes = {
  runtime: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Chips;
