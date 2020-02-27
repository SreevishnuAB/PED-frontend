import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './navbar';
import CustomButton from './custom-button';
import ToastNotification from './toast';
import CustomTextField from './custom-text-input';
import ProgressBar from './progress-bar';


const axios = require('axios').default;

const useStyles = makeStyles((theme)=>({
  root: {
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
    borderColor: '#00adb5',
    height: '200px',
    maxWidth: '300px',
    padding: '75px 100px 70px 100px',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'center',
    backgroundColor: '#393E46',
    borderRadius: '5px'

  },
  submitBtn:{
    color: '#23C94A',
    backgroundColor: '#001215',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#23C94A',
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

  const handleSubmit = ()=>{
    if(!username || !password){
      setToastMessage({error:true,messageText:"Username and password cannot be empty"});
      setOpenToast(!openToast);
    }
    else{
      setOpen(true);
      axios.post("https://ped-be.herokuapp.com/api/v1/login",{
        id: username,
        password: password
      }).then((response)=>{
      //  console.log(response);
        setOpen(false);
        props.onLogin(response.data);
      //  props.history.push(`/student/${response.data.id}`)
      }).catch((error)=>{
        console.log(error.response.data);
        setOpen(false);
        setToastMessage({error: true, messageText: error.response.data.detail.error_text})
        setOpenToast(true);
      });
    }
  }

  return(
    <div className={classes.root}>
      <NavBar authenticated={false}/>
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
  );
}