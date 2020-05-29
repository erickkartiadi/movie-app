import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

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
  appBar: {
    top: 'auto',
    bottom: 0,
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
  },
  github: {
    textAlign: 'right',
    textDecoration: 'underline',
    color: 'white',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar disableGutters className={classes.toolbar}>
            <Typography className={classes.title} variant="span" noWrap>
              &copy; Erick Kartiadi
            </Typography>
            <a
              href="https://github.com/erickkartiadi/movie-app"
              className={classes.github}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Footer;
