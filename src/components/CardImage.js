import React from 'react';
import { Card, CardMedia, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 444,
  },
}));

function CardImage({ image }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
      </CardActionArea>
    </Card>
  );
}

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CardImage;
