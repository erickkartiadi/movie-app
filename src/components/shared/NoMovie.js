import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
  icon: {
    fontSize: '5rem',
    color: theme.palette.secondary.main,
  },
  subtitle: {
    fontWeight: '300',
  },
}));

function NoMovie() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchIcon className={classes.icon} />
      <h3 className={classes.subtitle}>Search now to find more movies!</h3>
    </div>
  );
}

export default NoMovie;
