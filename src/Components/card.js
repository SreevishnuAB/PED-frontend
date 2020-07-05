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
    maxWidth: "300px",
    minWidth: "300px",
    maxHeight: "150px",
    minHeight: "150px",
    width: "300px",
    height: "150px",
    borderRadius: "5px",
    padding: "10px"
  },
  "2x2": {
    maxWidth: "300px",
    minWidth: "300px",
    maxHeight: "300px",
    minHeight: "300px",
    width: "300px",
    height: "300px",
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