import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
}));

function LoaderSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Loader type="Puff" color="#01579b" height={100} width={100} />
    </div>
  );
}
export default LoaderSpinner;
