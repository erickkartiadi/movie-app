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
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar disableGutters>
            <Typography className={classes.title} variant="h6" noWrap>
              Footer
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Footer;
