import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import Button from '@material-ui/core/Button';
import ToastNotification from './toast';

const LoginTextField = withStyles({
  root:{
      backgroundColor: '#222831',
      borderColor: '#00adb5',
    '& .MuiOutlinedInput-root':{
      color: '#00fff5',
      '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00fff5'
        },
      },
    '& label':{
      color: '#00fff5 !important'
    }
  },
})(TextField);

const LoginButton = withStyles({
  root: {
    backgroundColor: '#222831',
    color: '#00fff5',
    borderColor: '#00adb5',
    borderWidth: '1px',
    borderStyle: 'solid',
    width: '50px',
    padding: '5px 35px 5px 35px',
    '&:hover':{
      backgroundColor: '#00adb5',
      color: '#222831',
    }
  }
})(Button);

const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginLeft: '0',
  },
  form: {
    marginTop: '50px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#00adb5',
    height: '200px',
    width: '300px',
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
}));

export default function Login(props){

  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openToast,setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({error:false,messageText:''});

  const handleToast = (open)=>{
    setOpenToast(open);
  }

  const handleSubmit = ()=>{
    if(!username || !password){
      setToastMessage({error:true,messageText:"Username and password cannot be empty"});
      setOpenToast(!openToast);
    }
    else{
      /*TODO Check db, differentiate student vs faculty, appropriate component rendering */
      //for testing
      const user = {authenticated: false, name: '', peData:null};
//      console.log(username.search(/[0-9]/g));
      if(username.search(/[^A-Za-z]+$/g) !== -1){
        /* retrieve data from student db; if data, set authenticated and PEData */
        user.name = "Aakash K O";
        let peData = {
          rollno: 'AM.EN.U4CSE17001',
          resumeScore: 8.5,
          interviewStaus: 'Qualified',
          colorCH: 'orange',
          e1: '',
          e2: '',
          e3: '',
          e4: '',
          e5: ''
        }; //post successful auth; for testing; actual- responsedata[0]
        user.peData = peData;        
        console.log(user);
      }
      /*for testing, actual - check if faculty exists in db; else error */
      else if(username.search(/[0-9]/g) === -1 && username.search(/[.]/g) === -1)
        user.name = "faculty";
      console.log(user);
      user.authenticated = true;
      props.onLogin(user);
    }
  }

  return(
    <div className={props.login?classes.fullWidthRoot:classes.root}>
      <div className={classes.form}>
        <LoginTextField
          id="outlined-username-input"
          label="Username"
          variant="outlined"
          size="small"
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
        />
        <LoginTextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <LoginButton onClick={handleSubmit}>Submit</LoginButton>
      </div>
      <ToastNotification open={openToast} onClose={handleToast} message={toastMessage}/>
    </div>
  );
}