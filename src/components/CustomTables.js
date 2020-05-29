import { withStyles } from '@material-ui/core/styles';
import { TableCell, TableRow, Table } from '@material-ui/core';

const CustomCell = withStyles({
  root: {
    borderBottom: 'none',
    paddingLeft: 0,
    paddingTop: 8,
    paddingBottom: 0,
    '&:first-child': {
      width: 140,
      fontWeight: 'bold',
    },
  },
})(TableCell);

const CustomRow = withStyles({
  root: {
    verticalAlign: 'top',
  },
})(TableRow);

const CustomTable = withStyles({
  root: {
    borderSpacing: '0 0.25rem',
    borderCollapse: 'separate',
  },
})(Table);

export { CustomCell, CustomRow, CustomTable };
