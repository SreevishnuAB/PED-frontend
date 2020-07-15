import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Axios from '../axios/config';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import FadeRR from 'react-reveal';

const useStyles = makeStyles((theme)=>({
  cards: {
    width: '95%',
    // backgroundColor: '#375e79',
    margin: '5px',
//    flex: '1',
    // boxShadow: '0px 0px 5px #121212',
    // color: '#ffffff',
    padding: '3px'
  },
  cardContainer: {
    borderRadius: '5px',
    width: '350px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boxShadow: '0px 0px 5px 0.5px #121212',
    backgroundColor: '#286790',
    margin: '0px 0px 0px 3px',
    maxHeight: "900px"
  },
  details: {
    textAlign: 'right',
  },
  headerContainer:{
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center !important',
    marginBottom: '15px'
  },
  header: {
    flex: '2'
  },
  editIcon:{
    width: '20px',
    height: '20px'
  },
  headerBtn: {
    color: '#bbd7e5',
    backgroundColor: '#001a29',
    transition: '0.5s',
    '&:hover': {
      transition: '0.5s',
      color: '#001a29',
      backgroundColor: '#bbd7e5',
    },
    width: '30px',
    height: '30px',
    margin: '7px',
    padding: '2px',
    boxShadow: '0px 0px 5px 0.5px #121212',
  },
  avatar:{
    margin: '10px 0px 10px 0px',
    height: '200px !important',
    width: '200px !important',
    borderRadius: '50%',
    border: '2.5px solid #00F7FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a4051',
    boxShadow: '0px 0px 5px 0.5px #121212',
  },
  subContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%'
  },
  progress: {
    color: '#ffffff',
  }
}));


export default function Profile({ className , id}){

  const [profile, setProfile] = useState(undefined);
  const classes = useStyles();

  React.useEffect(()=>{
    async function getPEDData(){
      await Axios.get(`/student/${id}/profile`)
      .then((response)=>{
        // console.log(response.data);
        setProfile(response.data);
      })
      .catch((error)=>{
        console.log(error.response.data)
      })
    }
    getPEDData();
  }, [id]);

  return(
    <div className={className}>
      <div className={classes.cardContainer}>
        {(profile === undefined)?(<Fade in={(profile === undefined)} unmountOnExit>
          <CircularProgress className={classes.progress}/>
        </Fade>):
        (<FadeRR>
          <div className={classes.avatar}>
            <Typography className={classes.details} variant="h5" component="h5">
              {profile.name}
            </Typography> 
          </div>
          <div className={classes.subContainer}>
            {Object.keys(profile).filter(key => key !== "name").map((key, index)=>(
            <div key={index} className={classes.cards}>
              <Typography className={classes.header} gutterBottom>
                {key.toUpperCase()}
              </Typography>
              <div className={classes.details}>
                <Typography className={classes.details} variant="h6" component="h4">
                  {(key !== "email")?profile[key].toUpperCase():profile[key]}
                </Typography>
              </div>
            </div>))}
          </div>
        </FadeRR>)}
      </div>
    </div>
  );
}