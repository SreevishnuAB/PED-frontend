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
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  reportRoot:{
    // height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: "70px",
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
    color: "#0AB00A",
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
    margin: '3px',
//    flex: '1',
    boxShadow: '0px 0px 10px 1.5px #121212',
    color: '#ffffff',
  },
  cardWide:{
    width: '250px'
  },
  cardContainer: {
    // height: "100%",
    display: 'flex',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: "38.125vw" //temporary
    // [theme.breakpoints.up('lg')]:{
    //     maxWidth: '33vw'
    // }
  },
  cardContainerProfile:{
    height: '100%',
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
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
  },
  profile:{
    flex: '1',
    // height: '100%'
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
  innerContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  innerCards: {
    backgroundColor: '#4481ab',
    boxShadow: '0px 0px 10px 1.5px #121212',
  },
  innerCardsGrid: {
    display: 'grid',
    gridTemplateColumns: "1fr 1fr 190px 1fr 1fr",
    gridTemplateRows: "10px 60px 1fr 60px 1fr",
    gap: "10px 10px",
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
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    overflowY: 'auto',
    height: '92.5vh',
    flex: 1
  },
  profilePane: {
    // height: "100vh",
    maxHeight: "910px",
    overflowY: "clip"
  },
  iconContainer1x1: {
    height: '40px',
    width: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a4051',
    borderRadius: '50%',
    padding: '7.5px',
    marginBottom: '10px',
    boxShadow: '0px 0px 5px 0.5px #121212',
  },
  iconContainer1x2:{
    width: "120px !important",
    justifyContent: 'space-around !important',
    borderRadius: '30px !important',
    padding: '7.5px 5px !important'
  },
  iconContainer1x3:{
    width: "180px !important",
    justifyContent: 'space-around !important',
    borderRadius: '30px !important',
    padding: '7.5px 5px !important'
  },
  statusText: {
    width: "130px",
    padding: '5px',
    margin: '0px 10px',
    backgroundColor: '#1a4051',
    borderRadius: "5px",
    textAlign: "center",
    boxShadow: '0px 0px 5px 0.5px #121212',
  },
  cardContent1x1: {
    height: "80%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  statusText1x2: {
    width: "310px !important"
  },
  //temporary
  containerWide: {
    width: "100% !important"
  },
  cardGridDate: {
    gridColumn: "3 / 4",
    gridRow: "2 / 3",
    placeSelf: "stretch"
  },
  cardGridAvg:{
    gridColumn: "3 / 4",
    gridRow: '3 / 4',
    placeSelf: 'center'
  },
  cardGridNA: {
    gridColumn: "2 / 5",
    gridRow: '4 / 5',
    justifySelf: "stretch",
    alignSelf: 'center'
  },
  cardGridVA: {
    gridColumn: "2 / 5",
    gridRow: '5 / 6',
    justifySelf: "stretch",
    alignSelf: 'center'
  }
}));

const convertScoretoStatus = (value, type)=>{
  if(type !== ""){
    value =  parseFloat(value);
    if(type === "resume"){
      if(value >= 10)
        return "qualified";
      else if(value >= 7.5)
        return "pending";
    }
    else if(type === "score"){
      if(value >= 55)
        return "qualified";
    }
    return "";
  }
  return value;
}

const getColorByValue = (value, style, type = "")=>{
 
  value = convertScoretoStatus(value, type);

  switch (value.toLowerCase()) {
    case "completed":
    case "eligible":
    case "qualified":
    case "orange":
    case "blue":
    case "green":
      return style.CHGreen;
    case "scheduled":
    case "pending":
      return style.CHOrange;
    default:
      return style.CHRed
  }
}

const getIconByValue = (value, style, type = "")=>{
 
  let status = convertScoretoStatus(value, type)
  switch (status.toLowerCase()) {
    case "completed":
    case "eligible":
    case "qualified":
    case "orange":
    case "blue":
    case "green":
      return <CheckCircleOutlinedIcon className={style.CHGreen} fontSize="large"/>;
    case "scheduled":
    case "pending":
      return <QueryBuilderIcon className={style.CHOrange} fontSize="large"/>;
    default:
      return <CancelOutlinedIcon className={style.CHRed} fontSize="large"/>;
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
    colorCH = getColorByValue(pedData.colorCH, classes);
    colorStatus = getColorByValue(pedData.interviewStatus, classes);
    colorCHStatus = getColorByValue(pedData.colorCH, classes);
    colorSSStatus = getColorByValue(pedData.softskillsStatus, classes);
    colorResume = getColorByValue(pedData.resumeScore, classes, "resume");
    colorScore = getColorByValue(pedData.eligibility.avgScore, classes, "score");
    colorEval2 = getColorByValue(evalObj[1].status, classes);
    colorEval1 = getColorByValue(evalObj[0].status, classes);
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
          <div className={classes.profilePane}>
            <Profile className={`${classes.cardContainer} ${classes.cardContainerProfile}`} profile={profile}/>
          </div>
          <div className={classes.mainPanel}>
            <div className={classes.cardContainerRow}>
              <div className={classes.cardContainer}>
                <Card className={`${colorCH} ${classes.cards}`} size={"1x1"} title={"Interview Status"}>
                  <div className={classes.cardContent1x1}>
                    <div className={`${classes.iconContainer1x1} ${colorStatus}`}>
                      {getIconByValue(pedData.interviewStatus, classes)}
                    </div>
                    <Typography className={`${classes.statusText} ${colorStatus}`} variant="h6" component="h6">
                      {pedData.interviewStatus}
                    </Typography>
                  </div>
                </Card>
                <Card className={classes.cards} size={"1x2"} title={"Technical Skills - Coding"}>
                  <div className={classes.cardContent1x1}>
                    <div className={`${classes.iconContainer1x1} ${classes.iconContainer1x2} ${getColorByValue(pedData.colorCH, classes)}`}>
                      {getIconByValue(pedData.colorCH, classes)}
                      <Typography className={getColorByValue(pedData.colorCH, classes)} variant="h6" component="h6">
                        {`${pedData.colorCH[0].toUpperCase()}${pedData.colorCH.substring(1)}`}
                      </Typography>
                    </div>
                    <Typography className={`${classes.statusText} ${classes.statusText1x2} ${getColorByValue(pedData.colorCH, classes)}`} variant="h6" component="h6">
                      {(pedData.colorCH === 'red')?"Orange or above required":"Eligible"}
                    </Typography>
                  </div>
                </Card>
                <Card className={classes.cards} size={"1x1"} title={"Soft Skills"}>
                  <div className={classes.cardContent1x1}>
                    <div className={`${classes.iconContainer1x1} ${colorSSStatus}`}>
                      {getIconByValue(pedData.softskillsStatus, classes)}
                    </div>
                    <Typography className={`${classes.statusText} ${colorSSStatus}`} variant="h6" component="h6">
                      {pedData.softskillsStatus}
                    </Typography>
                  </div>
                </Card>
                <Card className={classes.cards} size={"1x1"} title={"Resume Score"}>
                  <div className={classes.cardContent1x1}>
                    <div className={`${classes.iconContainer1x1} ${colorResume}`}>
                      {getIconByValue(pedData.resumeScore, classes, "resume")}
                    </div>
                    <Typography className={`${classes.statusText} ${colorResume}`} variant="h6" component="h6">
                      {pedData.resumeScore}
                    </Typography>
                  </div>
                </Card>
                <Card className={classes.cards} size={"1x2"} title={"Average Score"}>
                  <div className={classes.cardContent1x1}>
                    <div className={`${classes.iconContainer1x1} ${classes.iconContainer1x2} ${colorScore}`}>
                      {getIconByValue(pedData.eligibility.avgScore, classes, "score")}
                      <Typography className={colorScore} variant="h6" component="h6">
                        {`${pedData.eligibility.avgScore}%`}
                      </Typography>
                    </div>
                    <Typography className={`${classes.statusText} ${classes.statusText1x2} ${colorScore}`} variant="h6" component="h6">
                      {(parseFloat(pedData.eligibility.avgScore) < 55 )?"Average above 55% required":"Eligible"}
                    </Typography>
                  </div>
                </Card>
              </div>
              <div className={classes.cardContainer}>
                <Card className={classes.cards} size={"2x4"} title={"Verbal & Aptitude - Visualization"}>

                </Card>
              </div>
            </div>
            <div className={`${classes.cardContainer} ${classes.containerWide}`}>
              <Card className={classes.cards} size={"3x4"} title={"Verbal & Aptitude - Evaluation"}>
                <div className={classes.innerContainer}>
                  <IconButton>
                    <KeyboardArrowLeftOutlinedIcon/>
                  </IconButton>
                  <Card className={classes.innerCards} title={"E1"} size={"2x3"}>
                    <div className={classes.innerCardsGrid}>
                      <div className={`${classes.iconContainer1x1} ${classes.iconContainer1x3} ${classes.cardGridDate} ${getColorByValue(evalObj[0].status, classes)}`}>
                        <CalendarTodayOutlinedIcon fontSize="large" className={getColorByValue(evalObj[0].status, classes)}/>
                        <Typography variant="h6" component="h6">
                          {(evalObj[0].date === null)?"TBD":evalObj[0].date}
                        </Typography>
                      </div>
                      {evalObj[0].status === "Completed" && <>
                      <div className={`${classes.iconContainer1x1} ${classes.iconContainer1x2} ${classes.cardGridAvg} ${getColorByValue(pedData.eligibility.avgScore, classes, "score")}`}>
                        {getIconByValue(evalObj[0].avg, classes, "score")}
                        <Typography variant="h6" component="h6">
                          {`${evalObj[0].avg}%`}
                        </Typography>
                      </div>
                      <Typography className={`${classes.statusText} ${classes.statusText1x2} ${classes.cardGridNA}`} variant="h6" component="h6">
                        {`Numerical apt. : ${evalObj[0].na}%`}
                      </Typography>
                      <Typography className={`${classes.statusText} ${classes.statusText1x2} ${classes.cardGridVA}`} variant="h6" component="h6">
                        {`Verbal apt. : ${evalObj[0].va}%`}
                      </Typography></>}
                    </div>
                  </Card>
                  <IconButton>
                    <KeyboardArrowRightOutlinedIcon/>
                  </IconButton>
                </div>
              </Card>
            </div>
            <div className={classes.sections}>
              <fieldset className={classes.sectionBounds}>
                <legend className={classes.legend}>Verbal & Aptitude</legend>
                <div className={classes.cardContainer}>
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
                          <div className={`${classes.blockChip} ${getColorByValue(object.status, classes)}`}>
                            {object.status}
                          </div>
                          <div className={`${classes.blockChip} ${getColorByValue(object.status, classes)}`}>
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