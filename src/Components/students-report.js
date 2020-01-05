import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(()=>({
  reportRoot:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: "10px 10px",
  },
  sections: {
    margin: "10px 10px",
    
  },
  rootSectionBound:{
    border: "1px solid",
    borderRadius: '3px',
    width:'inherit',
    height: 'inherit',
  },
  sectionBounds: {
    border: "1px solid",
    borderRadius: '3px',
    width:'inherit',
    height: 'inherit',
  }
}));

export default function StudentsReport(props){

  const classes = useStyles();  

  return(
    <div className={classes.reportRoot}>
      <fieldset className={classes.rootSectionBound} style={{color:`${props.colorCH}`, borderColor: `${props.colorCH}`}}>
        <legend>Know Your Eligibility</legend>
          <div className={classes.sections}>
            <fieldset className={classes.sectionBounds} style={{color:`${props.colorCH}`, borderColor: `${props.colorCH}`}}>
              <legend>Technical & Soft Skills</legend>
              TODO
            </fieldset>
          </div>
          <div className={classes.sections}>
            <fieldset className={classes.sectionBounds} style={{color:`${props.colorCH}`, borderColor: `${props.colorCH}`}}>
              <legend>Verbal & Aptitude</legend>
              TODO
            </fieldset>
          </div>
      </fieldset>
    </div>
  );
}