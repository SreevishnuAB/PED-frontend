import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './custom-button';
import ToastNotification from './toast';
import CustomTextField from './custom-text-input';
import ProgressBar from './progress-bar';
import Axios from '../axios/config';
import { Redirect } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

//const axios = require('axios');

const useStyles = makeStyles((theme)=>({
  root: {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  form: {
    marginTop: '50px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#779eb3',
    height: '200px',
    maxWidth: '300px',
    padding: '75px 100px 70px',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'center',
    backgroundColor: '#1a4051',
    borderRadius: '5px',
    boxShadow: '0px 2px 5px #121212'
  },
  submitBtn:{
    color: '#ddf0fe',
    backgroundColor: '#36667c',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#ddf0fe',
    width: '50px',
    padding: '5px 35px 5px 35px',
  },
  backdrop: {
    zIndex: 5,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
}));

export default function Login(props){
  
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [openToast,setOpenToast] = useState(false);
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState({error:false,messageText:''});

  const handleClose = () => {
    setOpen(false);
  };

  const handleToast = (open)=>{
    setOpenToast(open);
  }


  const handleSubmit = async ()=>{
    if(!username || !password){
      setToastMessage({error:true,messageText:"Username and password cannot be empty"});
      setOpenToast(!openToast);
    }
    else{
      //console.log("loading"+loading);
      setOpen(true);
      let formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      await Axios.post(
        '/login',
        formData,
      ).then((response)=>{
        setOpen(false);
        props.onLogin(response.data);
        props.history.push(`/${response.data.designation}/${response.data.id}`)
      }).catch((error)=>{
        setToastMessage({error: true, messageText: error.response.data.detail});
        setOpenToast(true);
        setOpen(false);
      });
      
        
      //console.log("here id: "+props.user.id);
      // if(id !== undefined){
      //   console.log("here");
      //   props.history.push(`/student/${id}`);
      // }
      
    }
  }
    //console.log(match.url);
    
  if(props.user.authenticated)
    return <Redirect to={`/student/${props.user.id}`}/>;
  
  return(
    <Fade in={true}>
      <div className={classes.root}>
        <ProgressBar open={open} onClose={handleClose}/>
        <div className={classes.form}>
          <CustomTextField
            id="outlined-username-input"
            label="Username"
            variant="outlined"
            size="small"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <CustomTextField
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <CustomButton onClick={handleSubmit}>Submit</CustomButton>
        </div>
        <ToastNotification open={openToast} onClose={handleToast} message={toastMessage}/>
      </div>
    </Fade>
  );
}