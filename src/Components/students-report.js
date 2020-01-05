import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(()=>({
  reportRoot:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }
}));

export default function StudentsReport(){

  const classes = useStyles();  

  return(
    <div className={classes.reportRoot}>
      <div style={{border: "1px solid #ffffff", margin: '20px'}}>TODO</div>
    </div>
  );
}