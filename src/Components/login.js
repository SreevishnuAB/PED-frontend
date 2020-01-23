import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import CustomButton from './custom-button';
import ToastNotification from './toast';
import CustomTextField from './custom-text-input';

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
      const user = {authenticated: false, peData:null};
      // console.log(username.search(/[^A-Za-z]+$/g) !== -1);
      // console.log(username.search(/[0-9]/g) === -1 && username.search(/[.]/g) === -1);
      if(username.search(/[^A-Za-z]+$/g) !== -1){
        /* retrieve data from student db; if data, set authenticated and PEData */
        if(username === "AM.EN.U4CSE17001"){
          let profile = {
            id: 'AM.EN.U4CSE17001',
            name: "Aakash K O",
            batch: "CS",
            semester: "S6",
            phone: "1234569870",
            email: 'asd@qwe.com'
          }
          let evalData = [{
              status: 'Completed',
              date: '18 January 2020',
              avg: 31.0,
              va: 29.0,
              na: 33.0
            }, {
              status: 'Scheduled',
              date:'20 January 2020',
              avg: 0.0,
              va: 0.0,
              na: 0.0
            }, {
              status: 'TBD',
              date: 'TBD',
              avg: 0.0,
              va: 0.0,
              na: 0.0
            }, {
              status: 'TBD',
              date: 'TBD',
              avg: 0.0,
              va: 0.0,
              na: 0.0
            }, {
              status: 'TBD',
              date: 'TBD',
              avg: 0.0,
              va: 0.0,
              na: 0.0
            }
          ];
          let peData = {
            resumeScore: 8.5,
            interviewStatus: 'Pending',
            softSkillsStatus: 'Qualified',
            colorCH: 'red',
            eligibility: {avgScore: 31.0, eval: evalData}
          }; //post successful auth; for testing; actual- responsedata[0]
          user.profile = profile;
          user.peData = peData;
          user.authenticated = true;
        }
        else{
          let profile = {
            id: 'AM.EN.U4CSE17002',
            name: "Adarsh K",
            batch: "CS",
            semester: "S6"
            }
          let peData = {
            resumeScore: 8,
            interviewStatus: 'Qualified',
            softSkillsStatus: 'Qualified',
            colorCH: 'blue',
            e1: '',
            e2: '',
            e3: '',
            e4: '',
            e5: ''
          }
          user.profile = profile;
          user.peData = peData;
          user.authenticated = true;
        }
        props.onLogin(user);
//        console.log(user);
      }
      /*for testing, actual - check if faculty exists in db; else error */
      else if(username.search(/[0-9]/g) === -1 && username.search(/[.]/g) === -1){
        user.profile = {name: "faculty"};
//      console.log(user);
        user.authenticated = true;
        props.onLogin(user);
      }
      else{
        setToastMessage({error:true,messageText:"Invalid username or password"});
        setOpenToast(!openToast);      
      }
    }
  }

  return(
    <div className={props.login?classes.fullWidthRoot:classes.root}>
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