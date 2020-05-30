import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Container,
  CssBaseline,
  useScrollTrigger,
  Slide,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '&>a': {
      textDecoration: 'none',
      color: 'white',
    },
    ...theme.typography.title,
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
  const { handleSubmit, searchInputValue, handleSearchInputValue } = props;
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container>
            <Toolbar disableGutters>
              <Typography className={classes.title} variant="h6" noWrap>
                <Link to="/movie-app">The Movie News</Link>
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <form onSubmit={handleSubmit}>
                  <InputBase
                    required
                    inputProps={{ 'aria-label': 'search' }}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    placeholder="Search…"
                    type="text"
                    value={searchInputValue}
                    onChange={handleSearchInputValue}
                  />
                </form>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Toolbar />
    </>
  );
}

Navbar.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSearchInputValue: PropTypes.func.isRequired,
};

export default Navbar;

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.defaultProps = {
  window: null,
};
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
