import React from 'react';
import { Card, CardMedia, CardActionArea, Chip } from '@material-ui/core';
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

function CardImage({ image, children }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
      </CardActionArea>
      {children}
    </Card>
  );
}

CardImage.defaultProps = {
  children: null,
};

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default CardImage;
