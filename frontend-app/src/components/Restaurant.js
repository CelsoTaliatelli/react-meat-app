import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor:'#DF1A48',
  },
}));

export default function Restaurant(props) {
  const p = props.products;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {p.name.charAt(0)}
          </Avatar>
        }
        title={p.name}
      />
      <CardMedia
        className={classes.media}
        image={p.image}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <StarRateIcon style={{color: '#e7a74e'}}/>
        </IconButton>
        <Typography>{p.rate} | {p.category} | {p.area}</Typography>
      </CardActions>
    </Card>
  );
}