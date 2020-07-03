import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './card';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ProgressBar from './progress-bar';
import { useRouteMatch } from 'react-router-dom';
import axiosPreset from '../axios/config';
import Profile from './profile';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme)=>({
  reportRoot:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: "10px 0px",
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
    borderColor: '#779eb3',
    backgroundColor: '#102d3f',
    boxShadow: '0px 0px 5px #121212'
  },
  sectionBounds: {
    flex: '1',
    margin: '10px 5px 10px 10px',
    border: "1px solid",
    borderRadius: '3px',
    borderColor: '#779eb3',
    width: 'inherit',
    height: 'inherit',
    backgroundColor: '#102d3f',
    boxShadow: '0px 0px 5px #121212'
  },
  legend: {
    color: '#dfebfa'
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
    backgroundColor: '#375e79',
    margin: '5px',
//    flex: '1',
    boxShadow: '0px 0px 5px #121212',
    color: '#ffffff',
    padding: '3px'
  },
  cardWide:{
    width: '250px'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.up('lg')]:{
        maxWidth: '33vw'
    }
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
    width: '50px !important'
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
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
  profile:{
    flex: '1'
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
  },
  mainPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
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

  const [pedData, setPedData] = React.useState(undefined);
  const [profile, setProfile] = React.useState(undefined);
  const [open, setOpen] = React.useState(true);

  const onGet = props.onGet;
  const id = props.student.id;
  
  React.useEffect(()=>{

    axiosPreset.get(
      `/student/${id}`, {
    }).then((response)=>{
        console.log("response");
        setProfile(response.data.profile);
        setPedData(response.data.pedData);
        onGet(response.data.profile);
        setOpen(false);

    }).catch((error)=>{
        console.log(error.response.data);
        
    });

  },[onGet, id]);

//  console.log(pedData);
  
  const classes = useStyles();  
  let evalObj = '', colorCH = '', colorStatus = '', colorSSStatus = '', colorCHStatus = '', colorResume = '', colorScore = '', colorEval1 = '', colorEval2 = '';
//  console.log(props);
  if(pedData !== undefined){
//    console.log(pedData);
    
    evalObj = pedData.eligibility.eval;
    colorCH = resolveClassName(pedData.colorCH, classes);
    colorStatus = resolveColorByValue(pedData.interviewStatus, classes);
    colorCHStatus = resolveColorByValue(pedData.colorCH, classes);
    colorSSStatus = resolveColorByValue(pedData.softskillsStatus, classes);
    colorResume = getColorByResume(pedData.resumeScore, classes);
    colorScore = getColorByScore(pedData.eligibility.avgScore, classes);
    colorEval1 = resolveColorByValue(evalObj[0].status, classes);
    colorEval2 = resolveColorByValue(evalObj[1].status, classes);
  }

  const color = {blue: "#4DC2FB", red: "red", green: "green", orange: "orange"};
  const match = useRouteMatch();
  const handleClose = () => {
    setOpen(false);
  };
  
  console.log(match.url);
  props.onNav(match.url);

  //return(<div>Student</div>);
  return(
    <Fade in={true}>
      <div className={classes.reportRoot}>
        <ProgressBar open={open} onClose={handleClose}/>
        {!open && <>
          <Profile className={classes.cardContainer} profile={profile}/>
          <div className={classes.mainPanel}>
            <div className={classes.cardContainerRow}>
              <fieldset className={classes.sectionBounds}>
                <legend className={classes.legend}>Overview</legend>
                <div className={classes.cardContainer}>
                  <Card className={classes.cards}>
                    <Typography className={classes.header} gutterBottom>
                      ID
                    </Typography>
                    <Typography className={classes.details} variant="h5" component="h3">
                      {profile.id.toUpperCase()}
                    </Typography>
                    <Typography className={classes.details} variant="h6" component="h4">
                      {profile.name}
                    </Typography>
                  </Card>
                  <Card className={`${colorCH} ${classes.cards}`}>
                    <Typography className={classes.header} gutterBottom>
                      INTERVIEW STATUS
                    </Typography>
                    <div className={classes.cardChip}>
                      <Chip className={`${classes.colorChip} ${colorStatus}`} label={pedData.interviewStatus}/>
                    </div>
                  </Card>
                  <Card className={classes.cards}>
                    <Typography className={classes.header} gutterBottom>
                      BATCH
                    </Typography>
                    <Typography className={classes.details} variant="h5" component="h3">
                      {profile.batch.toUpperCase()}
                    </Typography>
                  </Card>
                  <Card className={classes.cards}>
                    <Typography className={classes.header} gutterBottom>
                      SEMESTER
                    </Typography>
                    <Typography className={classes.details} variant="h5" component="h3">
                      {profile.semester.toUpperCase()}
                    </Typography>
                  </Card>
                </div>
              </fieldset>
              <fieldset className={classes.sectionBounds}>
                <legend className={classes.legend}>Technical & Soft Skills</legend>
                <div className={classes.cardContainer}>
                  <Card className={classes.cards}>
                    <div className={classes.headerContainer}>
                      <Typography className={classes.header} gutterBottom>
                        TECHNICAL: CODING
                      </Typography>
                      <Chip className={classes.colorIndicator} label={pedData.colorCH.toUpperCase()} style={{backgroundColor: `${color[pedData.colorCH]}`, color: `${color[pedData.colorCH]}`, borderColor: `${color[pedData.colorCH]}`}}/>
                    </div>
                    <div className={classes.cardChip}>
                      <Chip className={`${classes.colorChip} ${colorCHStatus}`} label={(pedData.colorCH === 'red')?"Orange or above color group needed":"Eligible"}/>
                    </div>
                  </Card>
                  <div className={classes.cardColumn}>
                    <Card className={classes.cards}>
                      <Typography className={classes.header} gutterBottom>
                        SOFT SKILLS
                      </Typography>
                      <div className={classes.cardChip}>
                        <Chip className={`${classes.colorChip} ${colorSSStatus}`} label={pedData.softskillsStatus}/>
                      </div>
                    </Card>
                    <Card className={classes.cards}>
                      <Typography className={classes.header} gutterBottom>
                        RESUME SCORE
                      </Typography>
                      <div className={classes.cardChip}>
                        <Chip className={`${classes.colorChip} ${colorResume}`} label={pedData.resumeScore}/>
                      </div>
                    </Card>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className={classes.sections}>
              <fieldset className={classes.sectionBounds}>
                <legend className={classes.legend}>Verbal & Aptitude</legend>
                <div className={classes.cardContainer}>
                  <Card className={classes.cards}>
                    <Typography className={classes.header} gutterBottom>
                      AVERAGE SCORE
                    </Typography>
                    <div className={classes.cardChip}>
                      <Chip className={`${classes.colorChip} ${colorScore}`} label={`${pedData.eligibility.avgScore} %`}/>
                      <Chip className={`${classes.colorChip} ${colorScore}`} label={(parseFloat(pedData.eligibility.avgScore) < 55 )?"Average score of 55 or above needed":"Eligible"}/>
                    </div>
                  </Card>
                  <Card className={classes.cards}>
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
                            {(evalObj[0].date === null)?"TBD":evalObj[0].date}
                          </div> 
                        </div>
                      </div>
                      <div className={classes.innerCardColumns}>
                        {evalObj[0].status === "Completed" && 
                        <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                          {`Numerical Apt.: ${evalObj[0].na} %`}
                        </div>} 
                        {evalObj[0].status === "Completed" && 
                        <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                          {`Verbal Apt.: ${evalObj[0].va} %`}
                        </div>}
                      </div>
                    </div>
                  </Card>
                  <Card className={classes.cards}>
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
                            {(evalObj[1].date === null)?"TBD":evalObj[1].date}
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
                  </Card>
                </div>
                <div className={classes.cardContainer}>
                  {evalObj.slice(2).map((object, index)=>(
                  <Card key={`cards${index}`} className={`${colorCH} ${classes.cards}`}>
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
                            {(object.date === null)?"TBD":object.date}
                          </div>
                        </div>
                      </div>
                      <div className={classes.innerCardColumns}>
                        {object.status === "Completed" && 
                        <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                          {`Numerical Apt.: ${object.na} %`}
                        </div>}
                        {object.status === "Completed" && 
                        <div className={`${classes.blockChip} ${classes.chipGeneric}`}>
                          {`Verbal Apt.: ${object.va} %`}
                        </div>}
                      </div>
                    </div>
                  </Card>))}
                </div>
              </fieldset>
            </div>
          </div>
        </>}
      </div>
    </Fade>
  );
}