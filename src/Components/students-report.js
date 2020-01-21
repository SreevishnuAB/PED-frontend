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
    margin: "10px 0px",   
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
    flex: '1',
    border: "1px solid",
    borderRadius: '3px',
    width: 'inherit',
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
  chipRed: {
    backgroundColor: 'red'
  },
  chipOrange: {
    backgroundColor: 'orange',
  },
  chipGreen: {
    backgroundColor: 'green'
  },
  cards: {
    minWidth: '270px',
    backgroundColor: '#181818',
    border: '1px solid',
    margin: '5px',
    flex: '1'
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'stretch', 
    justifyContent: 'center',
    flexDirection: 'column',
    flex: '1',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      flex: '1'
    },
  },
  colorIndicator: {
    borderRadius: '4px !important',
    width: '75px !important',
    marginBottom: '5px',
    '&:hover': {
      backgroundColor: 'inherit !important',
      border: '1px solid'
    }
  },
  header: {
    marginBottom: '15px',
    flex: '2'
  },
  headerContainer:{
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center !important'
  },
  details: {
    textAlign: 'right',
  },
  colorChip:{
    color: "#ffffff",
    borderRadius: '4px !important',
    margin: '10px 0px 5px 10px !important' ,
    minWidth: '150px !important'
  },
  cardColumn: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'stretch',
    flex: '1',
    height: '261px !important'
  },
  cardChip: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  cardContainerRow: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
  scoreCard: {
    width: '100px',
    height: '80px',
    color: '#ffffff !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px'
  },
  innerCards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row !important'
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column'
    },

  },
  innerCardColumns: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  headerChip: {
    height: '40px !important',
    padding: '0px !important',
    minWidth: '100px'
  },
  headerChipContainer: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: '1'
  },
  blockChip: {
    height: '70px',
    margin: '3.5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    color: '#ffffff',
    flex: '1',
    fontSize: '0.8125rem',
    padding:'10px',
  },
  chipGeneric: {
    backgroundColor: '#00adb5 !important'
  }
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

const getColorByScore = (score, styles)=>{
  if(parseFloat(score) < 55)
    return styles.chipRed;
  else
    return styles.chipGreen;
}

const getColorByResume = (resume, style)=>{

  let score = parseFloat(resume);

  if(score >= 10)
    return style.chipGreen;
  else if(score >= 7.5)
    return style.chipOrange;
  else
    return style.chipRed;
}

const resolveColorByValue = (status, style)=>{
 
  switch (status.toLowerCase()) {
    case "completed":
    case "eligible":
    case "qualified":
    case "orange":
    case "blue":
    case "green":
      return style.chipGreen;
    case "scheduled":
    case "pending":
      return style.chipOrange;
    default:
      return style.chipRed
  }
}

export default function StudentsReport(props){

  const evalObj = props.peData.eligibility.eval;
  const classes = useStyles();  
//  console.log(props);
  const colorCH = resolveClassName(props.peData.colorCH, classes);
  const colorStatus = resolveColorByValue(props.peData.interviewStatus, classes);
  const colorCHStatus = resolveColorByValue(props.peData.colorCH, classes);
  const colorSSStatus = resolveColorByValue(props.peData.softSkillsStatus, classes);
  const colorResume = getColorByResume(props.peData.resumeScore, classes);
  const colorScore = getColorByScore(props.peData.eligibility.avgScore, classes);
  const colorEval1 = resolveColorByValue(evalObj[0].status, classes);
  const colorEval2 = resolveColorByValue(evalObj[1].status, classes);

  const color = {blue: "#4DC2FB", red: "red", green: "green", orange: "orange"};

  return(
    <div className={classes.reportRoot}>
      <fieldset className={`${colorCH} ${classes.rootSectionBound}`}>
        <legend>Know Your Eligibility</legend>
        <div className={classes.cardContainerRow}>
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
                  <div className={classes.cardChip}>
                    <Chip className={`${classes.colorChip} ${colorStatus}`} label={props.peData.interviewStatus}/>
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
          <fieldset className={`${colorCH} ${classes.sectionBounds}`}>
            <legend>Technical & Soft Skills</legend>
            <div className={classes.cardContainer}>
              <Card className={`${colorCH} ${classes.cards}`}>
                <CardContent>
                  <div className={classes.headerContainer}>
                    <Typography className={classes.header} gutterBottom>
                      TECHNICAL: CODING
                    </Typography>
                    <Chip className={`${colorCH} ${classes.colorIndicator}`} label={props.peData.colorCH.toUpperCase()} style={{backgroundColor: `${color[props.peData.colorCH]}`, color: `${color[props.peData.colorCH]}`, borderColor: `${color[props.peData.colorCH]}`}}/>
                  </div>
                  <div className={classes.cardChip}>
                    <Chip className={`${classes.colorChip} ${colorCHStatus}`} label={(props.peData.colorCH === 'red')?"Orange or above color group needed":"Eligible"}/>
                  </div>
                </CardContent>
              </Card>
              <div className={classes.cardColumn}>
                <Card className={`${colorCH} ${classes.cards}`}>
                  <CardContent>
                    <Typography className={classes.header} gutterBottom>
                      SOFT SKILLS
                    </Typography>
                    <div className={classes.cardChip}>
                      <Chip className={`${classes.colorChip} ${colorSSStatus}`} label={props.peData.softSkillsStatus}/>
                    </div>
                  </CardContent>
                </Card>
                <Card className={`${colorCH} ${classes.cards}`}>
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.header} gutterBottom>
                      RESUME SCORE
                    </Typography>
                    <div className={classes.cardChip}>
                      <Chip className={`${classes.colorChip} ${colorResume}`} label={props.peData.resumeScore}/>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </fieldset>
        </div>
        <div className={classes.sections}>
          <fieldset className={`${colorCH} ${classes.sectionBounds}`}>
            <legend>Verbal & Aptitude</legend>
            <div className={classes.cardContainer}>
              <Card className={`${colorCH} ${classes.cards}`}>
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.header} gutterBottom>
                    AVERAGE SCORE
                  </Typography>
                  <div className={classes.cardChip}>
                    <Chip className={`${classes.colorChip} ${colorScore}`} label={`${props.peData.eligibility.avgScore} %`}/>
                    <Chip className={`${classes.colorChip} ${colorScore}`} label={(parseFloat(props.peData.eligibility.avgScore) < 55 )?"Average score of 55 or above needed":"Eligible"}/>
                  </div>
                </CardContent>
              </Card>
              <Card className={`${colorCH} ${classes.cards}`}>
                <CardContent className={classes.cardContent}>
                  <div className={classes.headerContainer}>
                    <Typography className={classes.header} gutterBottom>
                      E1
                    </Typography>
                    {evalObj[0].status === "Completed" &&
                    <div className={`${classes.blockChip} ${classes.chipGeneric} ${classes.headerChip}`}>
                      {`Average: ${evalObj[0].avg} %`}
                    </div>}
                  </div>
                  <div className={classes.innerCards}>
                    <div className={classes.innerCardColumns}>
                      <div className={classes.headerChipContainer}>
                        <div className={`${classes.blockChip} ${colorEval1}`}>
                          {evalObj[0].status}
                        </div>
                        <div className={`${classes.blockChip} ${colorEval1}`}>
                          {evalObj[0].date}
                        </div> 
                      </div>
                    </div>
                    <div className={classes.innerCardColumns}>
                      {evalObj[0].status === "Completed" && 
                      <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                        {`Numerical Aptitude: ${evalObj[0].na} %`}
                      </div>} 
                      {evalObj[0].status === "Completed" && 
                      <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                        {`Verbal Aptitude: ${evalObj[0].va} %`}
                      </div>}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className={`${colorCH} ${classes.cards}`}>
                <CardContent className={classes.cardContent}>
                  <div className={classes.headerContainer}>
                    <Typography className={classes.header} gutterBottom>
                      E2
                    </Typography>
                    {evalObj[1].status === "Completed" &&
                    <div className={`${classes.blockChip} ${classes.chipGeneric} ${classes.headerChip}`}>
                      {`Average: ${evalObj[1].avg} %`}
                    </div>}
                  </div>
                  <div className={classes.innerCards}>
                    <div className={classes.innerCardColumns}>
                      <div className={classes.headerChipContainer}>
                        <div className={`${classes.blockChip} ${colorEval2}`}>
                          {evalObj[1].status}
                        </div>
                        <div className={`${classes.blockChip} ${colorEval2}`}>
                          {evalObj[1].date}
                        </div>
                      </div>
                    </div>
                    <div className={classes.innerCardColumns}>
                      {evalObj[1].status === "Completed" && 
                      <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                        {`Numerical Aptitude: ${evalObj[1].na} %`}
                      </div>}
                      {evalObj[1].status === "Completed" && 
                      <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                        {`Verbal Aptitude: ${evalObj[1].va} %`}
                      </div>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className={classes.cardContainer}>
              {evalObj.slice(2).map((object, index)=>(
              <Card key={`cards${index}`} className={`${colorCH} ${classes.cards}`}>
                <CardContent className={classes.cardContent}>
                  <div className={classes.headerContainer}>
                    <Typography className={classes.header} gutterBottom>
                      {`E${index+3}`}
                    </Typography>
                    {object.status === "Completed" &&
                    <div className={`${classes.blockChip} ${classes.chipGeneric} ${classes.headerChip}`}>
                      {`Average: ${object.avg} %`}
                    </div>}
                  </div>
                  <div className={classes.innerCards}>
                    <div className={classes.innerCardColumns}>
                      <div className={classes.headerChipContainer}>
                        <div className={`${classes.blockChip} ${resolveColorByValue(object.status, classes)}`}>
                          {object.status}
                        </div>
                        <div className={`${classes.blockChip} ${resolveColorByValue(object.status, classes)}`}>
                          {object.date}
                        </div>
                      </div>
                    </div>
                    <div className={classes.innerCardColumns}>
                      {object.status === "Completed" && 
                      <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                        {`Numerical Aptitude: ${object.na} %`}
                      </div>}
                      {object.status === "Completed" && 
                      <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                        {`Verbal Aptitude: ${object.va} %`}
                      </div>}
                    </div>
                  </div>
                </CardContent>
              </Card>))}
            </div>
          </fieldset>
        </div>
      </fieldset>
    </div>
  );
}