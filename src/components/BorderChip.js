import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const BorderChip = withStyles({
  root: {
    borderRadius: '0.25rem',
    marginTop: '0.25rem',
  },
})(Chip);

export default BorderChip;
