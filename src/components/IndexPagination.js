import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(5),
    },
  },
}));

function IndexPagination({ handlePageChange, pageNumber }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Pagination count={pageNumber} onChange={handlePageChange} />
    </Grid>
  );
}
IndexPagination.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};
export default IndexPagination;
