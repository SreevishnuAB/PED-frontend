import React from 'react';
import { ResponsiveContainer , ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Axios from '../axios/config';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(()=>({
  graphContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  btn: {
    width: '60px',
    height: '60px',
    padding: '3px',
    borderRadius: '50%',
    color: '#bbd7e5',
    boxShadow: '0px 0px 5px 0.5px #121212',
    backgroundColor: '#001a29',
    transition: '0.5s',
    '&:hover': {
      transition: '0.5s',
      color: '#001a29',
      backgroundColor: '#bbd7e5',
    }
  },
}));
export default function Graph({ studentId , className}){

  const classes = useStyles();
  const [switchData, setSwitchData] = React.useState(false);
  const [studentData, setStudentData] = React.useState([]);
  const [batchData, setBatchData] = React.useState([]);

  React.useEffect(()=>{
    async function getStudentData(){
      return Axios.get(`/graph/${studentId}`);
    }

    async function getBatchData(){
      return Axios.get('/graph');
    }

    Promise.all([getStudentData(), getBatchData()])
      .then(results => {
        console.log(results[0].data);
        console.log(results[1].data);
        setStudentData(results[0].data.graph_data);
        setBatchData(results[1].data.graph_data);
      })
      .catch(error => {
        console.log(error.response.data); 
      });
  }, [studentId]);

  const handleSwitch = ()=>{
    setSwitchData(!switchData);
  }

  return(
    <div className={`${className} ${classes.graphContainer}`}>
      <ResponsiveContainer width="75%" height={400}>
        <ComposedChart data={(switchData)?batchData:studentData}>
          <CartesianGrid vertical={false} horizontal={false} stroke="#ffffff" />
          <XAxis stroke="#ffffff" dataKey="name" />
          <YAxis stroke="#ffffff"/>
          <Tooltip wrapperStyle={{backgroundColor: "#001a29", border:"0px", boxShadow: '0px 0px 10px 1.5px #121212'}} contentStyle={{backgroundColor: "#001a29", borderRadius: '5px', border:"0px"}}/>
          <Legend layout="vertical"/>
          <Bar name={(switchData)?"Batch Numerical Aptitude":"Numerical Aptitude"} dataKey="na" fill="#00dc6a" />
          <Bar name={(switchData)?"Batch Verbal Aptitude":"Verbal Aptitude"}dataKey="va" fill="#00b3dd" />
          <Line name={(switchData)?"Batch Average":"Average"} type="monotone" dataKey="avg" strokeWidth={3} stroke="#ff7e5b" />
        </ComposedChart>
      </ResponsiveContainer>
      <IconButton className={classes.btn} onClick={handleSwitch}>
        {(switchData)?<Fade><PersonOutlineOutlinedIcon fontSize="large"/></Fade>:<Fade><PeopleAltOutlinedIcon fontSize="large"/></Fade>}
      </IconButton>
    </div>
  );
}