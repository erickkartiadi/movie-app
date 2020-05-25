import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Container } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const { handleSubmit, searchValue, handleSearchValue } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form onSubmit={handleSubmit}>
                <InputBase
                  inputProps={{ 'aria-label': 'search' }}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  placeholder="Search…"
                  type="text"
                  value={searchValue}
                  onChange={handleSearchValue}
                />
              </form>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSearchValue: PropTypes.func.isRequired,
};

export default Navbar;
