import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme)=>({
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
  sectionFill: {
    display: 'flex',
    alignItems: 'stretch'
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
  },
  CHOrange: {
    color: "orange",
    borderColor:"orange"
  },
  CHGreen: {
    color: "green",
    borderColor:"green"
  },
  CHBlue: {
    color: "#4DC2FB",
    borderColor: "#4DC2FB"
  },
  CHRed: {
    color: "red",
    borderColor: "red"
  },
  cards: {
    minWidth: '250px',
    backgroundColor: '#181818',
    border: '1px solid',
    margin: '5px'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    [theme.breakpoints.up('lg')]: {
      height: '88%',
    },
    
  },
  colorIndicator: {
   width: '75px !important',
   broderRadius: '50% !important',
   marginBottom: '5px',
   '&:hover': {
     backgroundColor: 'inherit !important',
     border: '1px solid'
   }
  },
  header: {
    marginBottom: '15px',
  },
  headerContainer:{
    display: 'flex',
    justifyContent:'space-between'
  },
  details: {
    textAlign: 'right',
  },
  colorChip:{
    color: "#ffffff",
    marginBottom: '5px',
    minWidth: '75px !important'
  },
  cardColumn: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  cardTechnical:{
    height: '100% !important'
  },
  cardContainerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
}));



const resolveClassName = (colorCodeHour, classes)=>{

  let styleClass;
  switch (colorCodeHour.toLowerCase()) {
    case "orange":
      styleClass = classes.CHOrange;
      break;
    case "green":
      styleClass = classes.CHGreen;
      break;
    case "blue":
      styleClass = classes.CHBlue;
      break;
    case 'red':
      styleClass = classes.CHRed;
      break;
    default:
      return "";
  }
  return styleClass;
}

const resolveColorByStatus = (status)=>{
  switch (status.toLowerCase()) {
    case "eligible":
    case "qualified":
    case "orange":
    case "blue":
    case "green":
      return "green";
    case "pending":
      return "orange";
    default:
      return "red";
  }
}

export default function StudentsReport(props){

  const classes = useStyles();  
//  console.log(props);
  const colorCH = resolveClassName(props.peData.colorCH, classes);
  const color = {blue: "#4DC2FB", red: "red"};

  return(
    <div className={classes.reportRoot}>
      <fieldset className={`${colorCH} ${classes.rootSectionBound}`}>
        <legend>Know Your Eligibility</legend>
          <div className={classes.cardContainerRow}>
            <div className={`${classes.sections} ${classes.sectionFill}`}>
              <fieldset className={`${colorCH} ${classes.sectionBounds}`}>
                <legend>Overview</legend>
                <div className={classes.cardContainer}>
                  <Card className={`${colorCH} ${classes.cards}`}>
                    <CardContent>
                      <Typography className={classes.header} gutterBottom>
                        ID
                      </Typography>
                      <Typography className={classes.details} variant="h5" component="h3">
                        {props.profile.id}
                      </Typography>
                      <Typography className={classes.details} variant="h6" component="h4">
                        {props.profile.name}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={`${colorCH} ${classes.cards}`}>
                    <CardContent>
                      <Typography className={classes.header} gutterBottom>
                        INTERVIEW STATUS
                      </Typography>
                      <div className={classes.cardColumn}>
                        <Chip className={classes.colorChip} style={{backgroundColor: `${resolveColorByStatus(props.peData.interviewStatus)}`}} label={props.peData.interviewStatus}/>
                      </div>
                    </CardContent>
                  </Card>
                  <div className={classes.cardColumn}>
                    <Card className={`${colorCH} ${classes.cards}`}>
                      <CardContent>
                        <Typography className={classes.header} gutterBottom>
                          BATCH
                        </Typography>
                        <Typography className={classes.details} variant="h5" component="h3">
                          {props.profile.batch.toUpperCase()}
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className={`${colorCH} ${classes.cards}`}>
                      <CardContent>
                        <Typography className={classes.header} gutterBottom>
                          SEMESTER
                        </Typography>
                        <Typography className={classes.details} variant="h5" component="h3">
                          {props.profile.semester.toUpperCase()}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className={`${classes.sections} ${classes.sectionFill}`}>
              <fieldset className={`${colorCH} ${classes.sectionBounds}`}>
                <legend>Technical & Soft Skills</legend>
                <div className={classes.cardContainer}>
                  <Card className={`${colorCH} ${classes.cards} ${classes.cardTechnical}`}>
                    <CardContent>
                      <div className={classes.headerContainer}>
                        <Typography className={classes.header} gutterBottom>
                          TECHNICAL: CODING
                        </Typography>
                        <Chip className={`${colorCH} ${classes.colorIndicator}`} label={props.peData.colorCH.toUpperCase()} style={{backgroundColor: `${color[props.peData.colorCH]}`, color: `${color[props.peData.colorCH]}`, borderColor: `${color[props.peData.colorCH]}`}}/>
                      </div>
                      <div className={classes.cardColumn}>
                        <Chip className={classes.colorChip} style={{backgroundColor: `${resolveColorByStatus(props.peData.colorCH)}`}} label={(props.peData.colorCH === 'red')?"Orange or above color group needed":"Eligible"}/>
                      </div>
                    </CardContent>
                  </Card>
                  <div className={classes.cardColumn}>
                    <Card className={`${colorCH} ${classes.cards}`}>
                      <CardContent>
                        <Typography className={classes.header} gutterBottom>
                          SOFT SKILLS
                        </Typography>
                        <div className={classes.cardColumn}>
                          <Chip className={classes.colorChip} style={{backgroundColor: `${resolveColorByStatus(props.peData.softSkillsStatus)}`}} label={props.peData.softSkillsStatus}/>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className={`${colorCH} ${classes.cards}`}>
                      <CardContent>
                        <Typography className={classes.header} gutterBottom>
                          RESUME SCORE
                        </Typography>
                        <Typography className={classes.details} variant="h5" component="h3">
                          {props.peData.resumeScore}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className={classes.sections}>
            <fieldset className={`${colorCH} ${classes.sectionBounds}`}>
              <legend>Verbal & Aptitude</legend>
                TODO
            </fieldset>
          </div>
      </fieldset>
    </div>
  );
}