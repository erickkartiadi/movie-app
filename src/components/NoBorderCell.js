import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

/**
 * TODO: change first child color
 */
const NoBorderCell = withStyles({
  root: {
    borderBottom: 'none',
    paddingLeft: 0,
    paddingTop: 8,
    paddingBottom: 0,
    '&:first-child': {
      width: 90,
    },
  },
})(TableCell);

export default NoBorderCell;
