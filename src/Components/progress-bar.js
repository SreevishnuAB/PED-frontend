import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';


const withStyles = makeStyles((theme)=>({
  backdrop: {
    zIndex: 5,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
}));

const ProgressBar = (props)=>{

  const classes = withStyles();

  return(
    <Fade in={props.open}>
      <Backdrop className={classes.backdrop} open={props.open} onClick={props.onClick}>
        <LinearProgress color="secondary" style={{width: '75vw', height: '2px'}}/>
        <Typography style={{paddingTop: '5px'}} variant="h5" component="h5">Please Wait</Typography>
      </Backdrop>
    </Fade>
  );
}

export default ProgressBar;
