import React from 'react';
import { makeStyles , useTheme , withStyles } from '@material-ui/core/styles';
import Card from './card';
import Typography from '@material-ui/core/Typography';
import { useRouteMatch } from 'react-router-dom';
import Axios from '../axios/config';
import Profile from './profile';
import Fade from '@material-ui/core/Fade';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import IconButton from '@material-ui/core/IconButton';
import Graph from './graph';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FadeRR from 'react-reveal';
import CustomButton from './custom-button';

const useStyles = makeStyles((theme)=>({
  reportRoot:{
    [theme.breakpoints.up("lg")]: {
      height: "calc(100vh - 100px)", 
      width: '100vw', 
    },
    height: "calc(100% - 100px)",
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: "75px",
    position: 'fixed',
    zIndex: -1,
    overflowY: 'hidden'
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
    // margin: '3px',
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
    height: "calc(100% - 100px)",
    // display: 'flex',
    // justifyContent: 'space-evenly',
    // alignItems: 'center'
    display: 'grid',
    // [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "0.2fr repeat(2, 1fr) 0.2fr",
    // },
    // gridTemplateColumns: "repeat(2, 1fr)",
    // gridTemplateRows: "0.2fr repeat(2, 1fr) 0.2fr",
    gap: '6px 6px'
  },
  innerCards: {
    // [theme.breakpoints.up("lg")]: {
      gridColumn: "2 / 4",
      gridRow: "2 / 4",
    // },
    // gridColumn: "1 / 3",
    // gridRow: "2 / 4",
    placeSelf: 'center center',
    backgroundColor: '#4481ab',
    boxShadow: '0px 0px 10px 1.5px #121212',
  },
  innerCardsGrid: {
    display: 'grid',
    gridTemplateColumns: "1fr 1fr 190px 1fr 1fr ",
    gridTemplateRows: "10px 60px 1fr 60px 1fr",
    gap: "6px 6px",
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
    // height: '93vh',
    margin:"0px 6px",
    // width: '100vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    alignItems: 'stretch',
    // justifyContent: 'center',
    gap: '6px 6px',
    gridAutoFlow: 'row dense',
    [theme.breakpoints.up("xl")]: {
      overflowY: 'hidden'
    },
    overflowY: 'auto',
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      height: "calc(100vh - 100px)",  
    },
  },
  profilePane: {
    // height: "100vh",
    minWidth: '350px',
    minHeight:'700px',
    [theme.breakpoints.up("xl")]: {
      maxHeight: "1080px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "calc(100vh - 100px)",  
    },
    height: "calc(100% - 100px)",
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
    margin: '0px 10px 10px',
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
  cardGridDate: {
    gridColumn: "3 / 4",
    gridRow: "2 / 3",
    placeSelf: "stretch"
  },
  cardGridAvg:{
    gridColumn: "3 / 4",
    gridRow: '3 / 4',
    placeSelf: 'start center'
  },
  cardGridNA: {
    gridColumn: "2 / 5",
    gridRow: '4 / 5',
    justifySelf: "stretch",
    alignSelf: 'end'
  },
  cardGridVA: {
    gridColumn: "2 / 5",
    gridRow: '5 / 6',
    justifySelf: "stretch",
    alignSelf: 'start'
  },
  cardGridInterviewStatus: {
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
  cardGridTechSkills: {
    gridColumn: '2 / 4',
    gridRow: '1 / 2',
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
  cardGridSoftSkills: {
    gridColumn: '4 / 5',
    gridRow: '1 / 2',
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
  cardGridResume: {
    gridColumn: '1 / 2',
    gridRow: '2 / 3',
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
  cardGridAvgScore: {
    gridColumn: '2 / 4',
    gridRow: '2 / 3',
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
  cardGridVAV: {
    gridColumn: '5 / 9',
    gridRow: '1 / 4',
    // [theme.breakpoints.down("lg")]: {
    //   gridColumn: '2 / 6',
    //   gridRow: '3 / 6',
    // },
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
  cardGridVAE: {
    gridColumn: '1 / 5',
    gridRow: '3 / 7',
    // justifySelf: 'start',
    // alignSelf: 'start',
    // [theme.breakpoints.up("lg")]: {
      justifySelf: 'stretch',
      alignSelf: 'stretch',
    // },
  },
  statusTextGrid: {
    height: '40px',
    padding: '5px',
    backgroundColor: '#1a4051',
    borderRadius: "5px",
    textAlign: "center",
    boxShadow: '0px 0px 5px 0.5px #121212',
  },
  navBtn: {
    color: '#bbd7e5',
    boxShadow: '0px 0px 5px 0.5px #121212',
    backgroundColor: '#001a29',
    transition: '0.5s',
    justifySelf: "center",
    '&:hover': {
      transition: '0.5s',
      color: '#001a29',
      backgroundColor: '#bbd7e5',
    }
  },
  navBtnLt: {
    // [theme.breakpoints.up("lg")]: {
      gridColumn: '1 / 2',
      gridRow: '2 / 3',
      placeSelf: 'end center'
    // },
    // gridColumn: '1 / 2',
    // gridRow: '4 / 5',
    // placeSelf: 'end end'
  },
  navBtnRt: {
    // [theme.breakpoints.up("lg")]: {
      gridColumn: '4 / 5',
      gridRow: '2 / 3',
      placeSelf: 'end center'
    // },
    // gridColumn: '2 / 3',
    // gridRow: '4 / 5',
    // placeSelf: 'end start'
  },
  graph:{
    width:'100%',
    height: '100%'
  },
  progressContainer: {
    gridRow: '3 / 4',
    gridColumn: '3 / 4',
  },
  progress: {
    color: '#ffffff',
  },
  graphBtn: {
    gridColumn: '4 / 5',
    gridRow: '2 / 3',
    placeSelf: 'stretch stretch'
  }
}));

function convertScoretoStatus(value, type){
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

function getColorByValue(value, style, type = ""){
 
  console.log(value);
  
  value = convertScoretoStatus(value, type);

  console.log(value);
  
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

function getIconByValue(value, style, type = ""){
 
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

const EvalCard = ({ evalObj })=>{
  const classes = useStyles();
  return(
    <Fade in={true}>
      <Card className={classes.innerCards} title={`Evaluation ${evalObj.eval}`} size={"2x2"}>
        <div className={classes.innerCardsGrid}>
          <div className={`${classes.iconContainer1x1} ${classes.iconContainer1x3} ${classes.cardGridDate} ${getColorByValue(evalObj.status, classes)}`}>
            <CalendarTodayOutlinedIcon fontSize="large" className={getColorByValue(evalObj.status, classes)}/>
            <Typography variant="h6" component="h6">
              {(evalObj.date === null)?"TBD":evalObj.date}
            </Typography>
          </div>
          {evalObj.status === "Completed" && <>
          <div className={`${classes.iconContainer1x1} ${classes.iconContainer1x2} ${classes.cardGridAvg} ${getColorByValue(evalObj.avg, classes, "score")}`}>
            {getIconByValue(evalObj.avg, classes, "score")}
            <Typography variant="h6" component="h6">
              {`${evalObj.avg}%`}
            </Typography>
          </div>
          <Typography className={`${classes.statusTextGrid} ${classes.cardGridNA}`} variant="h6" component="h6">
            {`Numerical apt. : ${evalObj.na}%`}
          </Typography>
          <Typography className={`${classes.statusTextGrid} ${classes.cardGridVA}`} variant="h6" component="h6">
            {`Verbal apt. : ${evalObj.va}%`}
          </Typography></>}
        </div>
      </Card>
    </Fade>
  )
}


export default function StudentsReport(props){

  const [showGraph, setShowGraph] = React.useState(false);
  const [pedData, setPedData] = React.useState(undefined);
  const [currCard, setCurrCard] = React.useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const viewGraph = useMediaQuery('(min-width: 1760px)');
  console.log(viewGraph);
  const id = props.student.id;
  
  React.useEffect(()=>{

    async function getData(){
      await Axios.get(
        `/student/${id}/peddata`)
        .then((response)=>{
          console.log("response");
          setPedData(response.data);
        })
        .catch((error)=>{
          console.log(error.response.data);
        }
      );
    }

    getData();
  },[id]);


//  console.log(pedData);
  
  const classes = useStyles();  
  let evalData = [], colorCH = '', colorStatus = '', colorSSStatus = '', colorCHStatus = '', colorResume = '', colorScore = '', colorEval1 = '', colorEval2 = '';
//  console.log(props);

  if(pedData !== undefined){
    console.log(pedData);
    
    evalData = pedData.eligibility.eval;
    colorCH = getColorByValue(pedData.colorCH, classes);
    colorStatus = getColorByValue(pedData.interviewStatus, classes);
    colorCHStatus = getColorByValue(pedData.colorCH, classes);
    colorSSStatus = getColorByValue(pedData.softskillsStatus, classes);
    colorResume = getColorByValue(pedData.resumeScore, classes, "resume");
    colorScore = getColorByValue(pedData.eligibility.avgScore, classes, "score");
  }

  const handlePrevious = ()=>{
    if(currCard > 0)
      setCurrCard(currCard - 1);
  }

  const handleNext = ()=>{
    if(currCard < evalData.length - 1)
      setCurrCard(currCard + 1);
  }
// console.log(evalData.map(evalObj=>(evalObj.status)));

  const color = {blue: "#4DC2FB", red: "red", green: "green", orange: "orange"};
  const match = useRouteMatch();
  
  // console.log(match.url);
  // props.onNav(match.url);

  //return(<div>Student</div>);
  return(
    <Fade in={true}>
      <div className={classes.reportRoot}>
        {(pedData !== undefined)&& <div className={classes.profilePane}>
          <Profile className={`${classes.cardContainer} ${classes.cardContainerProfile}`} id={id}/>
        </div>}
        <div className={classes.mainPanel}>
          {(pedData === undefined)?
          <Fade className={classes.progressContainer} in={true}>
            <CircularProgress className={classes.progress}/>
          </Fade>:<>
          <Card className={`${colorCH} ${classes.cards} ${classes.cardGridInterviewStatus}`} size={"1x1"} title={"Interview Status"}>
            <div className={classes.cardContent1x1}>
              <div className={`${classes.iconContainer1x1} ${colorStatus}`}>
                {getIconByValue(pedData.interviewStatus, classes)}
              </div>
              <Typography className={`${classes.statusText} ${colorStatus}`} variant="h6" component="h6">
                {pedData.interviewStatus}
              </Typography>
            </div>
          </Card>
          <Card className={`${classes.cards} ${classes.cardGridTechSkills}`} size={"1x2"} title={"Technical Skills - Coding"}>
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
          <Card className={`${classes.cards} ${classes.cardGridSoftSkills}`} size={"1x1"} title={"Soft Skills"}>
            <div className={classes.cardContent1x1}>
              <div className={`${classes.iconContainer1x1} ${colorSSStatus}`}>
                {getIconByValue(pedData.softskillsStatus, classes)}
              </div>
              <Typography className={`${classes.statusText} ${colorSSStatus}`} variant="h6" component="h6">
                {pedData.softskillsStatus}
              </Typography>
            </div>
          </Card>
          <Card className={`${classes.cards} ${classes.cardGridResume}`} size={"1x1"} title={"Resume Score"}>
            <div className={classes.cardContent1x1}>
              <div className={`${classes.iconContainer1x1} ${colorResume}`}>
                {getIconByValue(pedData.resumeScore, classes, "resume")}
              </div>
              <Typography className={`${classes.statusText} ${colorResume}`} variant="h6" component="h6">
                {pedData.resumeScore}
              </Typography>
            </div>
          </Card>
          <Card className={`${classes.cards} ${classes.cardGridAvgScore}`} size={"1x2"} title={"Average Score"}>
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
          {!viewGraph &&
          <CustomButton className={classes.graphBtn} onClick={()=>{setShowGraph(!showGraph)}}>
            {`Show ${(!showGraph?"Graph":"Cards")}`}
          </CustomButton>}
          {(viewGraph || showGraph) && <Card className={`${classes.cards} ${(!showGraph)?classes.cardGridVAV:classes.cardGridVAE}`} size={"3x4"} title={"Verbal & Aptitude - Visualization"}>
            <FadeRR when={showGraph || viewGraph}>
              <Graph className={classes.graph} studentId={id}/>
            </FadeRR>
          </Card>}
          {!showGraph && <Card className={`${classes.cards} ${classes.cardGridVAE}`} size={(matches)?"3x4":"3x2"} title={"Verbal & Aptitude - Evaluation"}>
            <div className={classes.innerContainer}>
              <IconButton className={`${classes.navBtn} ${classes.navBtnLt}`} onClick={handlePrevious}>
                <KeyboardArrowLeftOutlinedIcon fontSize="large"/>
              </IconButton>
              <EvalCard evalObj={evalData[currCard]}/>
              <IconButton className={`${classes.navBtn} ${classes.navBtnRt}`} onClick={handleNext}>
                <KeyboardArrowRightOutlinedIcon fontSize="large"/>
              </IconButton>
            </div>
          </Card>}</>}
        </div>
      </div>
    </Fade>
  );
}