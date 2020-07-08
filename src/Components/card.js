import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(()=>({
  title: {
    width: "100%",
    textAlign: 'center'
  }
}));
const useSizes = makeStyles(()=>({
  "1x1": {
    maxWidth: "150px",
    minWidth: "150px",
    maxHeight: "150px",
    minHeight: "150px",
    width: "150px",
    height: "150px",
    borderRadius: "5px",
    padding: "10px"
  },
  "1x2": {
    maxWidth: "324px",
    minWidth: "324px",
    maxHeight: "150px",
    minHeight: "150px",
    width: "324px",
    height: "150px",
    borderRadius: "5px",
    padding: "10px"
  },
  "2x2": {
    maxWidth: "324px",
    minWidth: "324px",
    maxHeight: "324px",
    minHeight: "324px",
    width: "324px",
    height: "324px",
    borderRadius: "5px",
    padding: "10px"
  },
  "2x3": {
    maxWidth: "504px",
    minWidth: "504px",
    maxHeight: "324px",
    minHeight: "324px",
    width: "504px",
    height: "324px",
    borderRadius: "5px",
    padding: "10px"
  },
  "2x4": {
    maxWidth: "677px",
    minWidth: "677px",
    maxHeight: "324px",
    minHeight: "324px",
    width: "677px",
    height: "324px",
    borderRadius: "5px",
    padding: "10px"
  },
  "3x3": {
    maxWidth: "504px",
    minWidth: "504px",
    maxHeight: "504px",
    minHeight: "504px",
    width: "504px",
    height: "504px",
    borderRadius: "5px",
    padding: "10px"
  },
  "3x4": {
    maxWidth: "677px",
    minWidth: "677px",
    maxHeight: "504px",
    minHeight: "504px",
    width: "677px",
    height: "504px",
    borderRadius: "5px",
    padding: "10px"
  }
}));

const Card = (props)=>{
  const classes = useStyles();
  const size = useSizes();
  return(
    <div className={`${props.className} ${size[props.size]}`}>
      <Typography className={classes.title} variant="h6" component="h6">
        {props.title}
      </Typography>
      {props.children}
    </div>
  );
}

export default Card;