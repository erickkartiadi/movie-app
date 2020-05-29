import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
  title: {
    ...theme.typography.title,
    fontSize: '8rem',
    marginBottom: theme.spacing(3),
  },
  text: {
    fontSize: '1.5rem',
  },
}));
function ErrorPage({ text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Oops!
      </Typography>
      <Typography className={classes.text} variant="subtitle1">
        {text}
      </Typography>
    </div>
  );
}

ErrorPage.defaultProps = {
  text: 'Something went wrong',
};

ErrorPage.propTypes = {
  text: PropTypes.string,
};

export default ErrorPage;
