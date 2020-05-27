import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '8rem',
    height: '8rem',
  },
}));

function CastAvatar({ actors }) {
  let actorArr;
  if (actors.length > 1) {
    actorArr = actors.split(', ');
  } else {
    actorArr = [actors];
  }
  const classes = useStyles();

  const castsRender = actorArr.map((actor) => {
    const words = actor.split(' ');
    let initial = '';
    initial += words[0][0];
    if (words.length > 1) {
      initial += words[1][0];
    }
    return (
      <Grid
        direction="column"
        container
        item
        xs={2}
        alignItems="center"
        key={actor}
      >
        <Avatar className={classes.avatar}>{initial}</Avatar>
        <h5>{actor}</h5>
      </Grid>
    );
  });
  return actors !== 'N/A' ? castsRender : <p>N/A</p>;
}

CastAvatar.propTypes = {
  actors: PropTypes.string.isRequired,
};

export default CastAvatar;
