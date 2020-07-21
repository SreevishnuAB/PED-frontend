import '../App.css';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CustomTextField from './custom-text-input';
import ToastNotification from './toast';
import ProgressBar from './progress-bar';
import Axios from '../axios/config';
import Fade from 'react-reveal/Fade';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import DialpadOutlinedIcon from '@material-ui/icons/DialpadOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from './card';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    width: '100%'
  },
  toolbar: {
    backgroundColor: '#1a4051',
    borderStyle: 'solid',
    borderWidth: '1px 0px',
    borderColor: '#779eb3',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 5px #121212'
  },
  menuButton: {
    color: '#bbd7e5',
    backgroundColor: '#001a29',
    transition: '0.5s',
    '&:hover': {
      transition: '0.5s',
      color: '#001a29',
      backgroundColor: '#bbd7e5',
    }
  },
  title: {
    color: '#ffffff'
  },
  condRend:{
    visibility: 'hidden',
  },
  user: {
    height: '45px',
    color:'#bbd7e5',
    padding: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a4051'
  },
  menuContent: {
    backgroundColor: '#1a4051',
    color: '#bbd7e5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: '0px !important',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    margin: '5px',
  },
  dialogTitle:{
    width: '250px !important'
  },
  menuBtnOptions:{
    borderRadius: '0px !important'
  },
  overlay:{
    height: "100%",
    width: "0",
    position: "fixed",
    zIndex: 500,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(18,18,18, 0.9)",
    overflowX: "hidden",
    transition: "0.5s",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullWidth: {
    width: '100%',
    transition: '0.5s'
  },
  appbar: {
    zIndex: 1500,
    position: 'fixed',
    top: 0,
    left: 0
  },
  btnContainer: {
    height: '350px',
    width: '525px',
    display: 'grid',
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: '6px 6px',
  },
  card: {
    gridColumn: '1 / 3',
    gridRow: '1 / 3',
    placeSelf: 'center center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#292929',
    color: '#ffffff'
  },
  cardFooter: {
    width: '100%',
    borderTop: '2px solid #ffffff',
    height: '15%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  btnEmail: {
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
  },
  btnPhone: {
    gridColumn: '2 / 3',
    gridRow: '1 / 2'
  },
  btnPwd: {
    gridColumn: '1 / 2',
    gridRow: '2 / 3'
  },
  btnLogout: {
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
  },
  btnReport: {
    textDecoration: "none",
    gridColumn: '3 / 4',
    gridRow: '1 / 2',
    backgroundColor: '#292929',
    color: '#ffffff',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 1.5px #121212',
    placeSelf: 'stretch stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: "1em",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    '&:hover':{
      backgroundColor: '#505050',
    }
  },
  icon: {
    border: '3px solid #ffffff',
    borderRadius: '50%',
    padding: '7.5px',
    gridRow: '1 / 2',
    placeSelf: 'center center',
    marginBottom: '10px'
  },
  progress: {
    color: '#ffffff'
  }
}));

function getTitle(option){
  switch (option) {
    case "password":
      return "Change Password"
    case "phone":
      return "Update Phone Number";
    case "email":
      return "Update Email";
  }
}

const CardButton = withStyles({
  root: {
    backgroundColor: '#292929',
    color: '#ffffff',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 1.5px #121212',
    placeSelf: 'stretch stretch',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    fontSize: "1em",
    '&:hover':{
      backgroundColor: '#505050',
    }
  }
})(Button);

const CancelButton = withStyles({
  root: {
    backgroundColor: '#ffffff',
    color: '#292929',
    width: '50px',
    margin: '3px',
    border: '1px solid #292929',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 1.5px #121212',
    '&:hover':{
      backgroundColor: '#505050',
      color: '#ffffff'
    }
  }
})(Button);

const SaveButton = withStyles({
  root: {
    backgroundColor: '#0AB00A',
    color: '#ffffff',
    border: '1px solid #AB00A',
    width: '50px',
    margin: '3px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 1.5px #121212',
    '&:hover':{
      backgroundColor: '#505050',
      color: '#0AB00A'
    }
  }
})(Button);
export default function NavBar(props) {
  const classes = useStyles();
  const [curEdit, setCurEdit] = useState(undefined);
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newInfo, setNewInfo] = useState('');
  const [curPwd, setCurPwd] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const [openProg, setOpenProg] = useState(false);
  const [toastMessage, setToastMessage] = useState({error: false, messageText: ''});

  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu);
    if(setCurEdit)
      setCurEdit(undefined);
  }

  const handleLogout = ()=>{
    handleOpenMenu();
    props.onLogout();
  }

  const handleSave = ()=>{

    let endpoint = (props.user.designation === "student")?
                    `/student/${props.user.id}/`:
                    `/faculty/${props.user.id}/`;

    const payload = {
      id: props.user.id
    }

    let error = {error: false, messageText: ''};
    if(!newInfo){
      error = {error: true, messageText: ''};
      if(curEdit === "password")
        error.messageText = "Enter new password";
      else if(curEdit === "phone")
        error.messageText = "Enter new phone number";
      else
        error.messageText = "Enter new email";
      setToastMessage(error);
      setOpenToast(true);
    }
    else if(curEdit === "password"){
      if(!curPwd){
        error = {error: true, messageText: 'Enter current password'};
        setToastMessage(error);
        setOpenToast(true);
      }
      else{
        endpoint = `/${props.user.id}/password`;
        console.log(endpoint);
        payload.cur_pwd = curPwd;
        payload.new_pwd = newInfo;
      }
    }
    else if(curEdit === "phone"){
      if(newInfo.length !== 10 || newInfo.search(/[\D]/) !== -1 ){
        error = {error: true, messageText: "Enter a valid phone number"};
        setToastMessage(error);
        setOpenToast(true);
      }
      else{
        // error.error = false;
        endpoint += "profile/phone";
        payload.phone = newInfo;
      }
    }
    else if(curEdit === "email"){
      if(!RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(newInfo)){
        error = {error: true, messageText: "Enter a valid email address"};
        setToastMessage(error);
        setOpenToast(true);
      }
      else{
        // error.error = false;
        endpoint += "profile/email";
        payload.email = newInfo;
      }
    }
    if(error.error === false){
      setLoading(true);
      setCurPwd('');
      setNewInfo('');
      Axios.patch(endpoint, payload)
      .then((response)=>{
        setToastMessage({error: false, messageText: response.data});
        setLoading(false);
        setOpenToast(true);
        setTimeout(()=>setCurEdit(undefined), 1000);
      })
      .catch((error)=>{
        console.log(error.response);
        setToastMessage({error: true, messageText: error.response.data.detail});
        setLoading(false);
        setOpenToast(true);
      });
    }
  }

  const handleCancel = ()=>{
    setNewInfo(undefined);
    setCurEdit(undefined);
  }
  
  return (
    <Fade>
      <div className={classes.root}>
        <ToastNotification open={openToast} onClose={(open)=>{setOpenToast(open)}} message={toastMessage}/>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              Placement Eligibility Dashboard
            </Typography>
            {props.authenticated && <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="logout" onClick={handleOpenMenu}>
              <AccountCircleIcon className={classes.logoutBtn}/>
            </IconButton>}
          </Toolbar>
        </AppBar>
        <div className={(openMenu)?`${classes.overlay} ${classes.fullWidth}`:classes.overlay}>
          <Fade when={openMenu}>
            <div className={classes.btnContainer}>
              {(!curEdit)?<>
              <CardButton className={`${classes.button} ${classes.btnEmail}`} onClick={()=>{setCurEdit('email')}}>
                <AlternateEmailOutlinedIcon className={classes.icon} fontSize="large"/>
                Update Email        
              </CardButton>
              <CardButton className={`${classes.button} ${classes.btnPhone}`} onClick={()=>{setCurEdit('phone')}}>
                <DialpadOutlinedIcon className={classes.icon} fontSize="large"/>
                Update Phone
              </CardButton>
              <CardButton className={`${classes.button} ${classes.btnPwd}`} onClick={()=>{setCurEdit('password')}}>
                <VpnKeyOutlinedIcon className={classes.icon} fontSize="large"/>
                Change Password
              </CardButton>
              <CardButton className={`${classes.button} ${classes.btnLogout}`} onClick={handleLogout}>
                <ExitToAppOutlinedIcon className={classes.icon} fontSize="large"/>
                Logout
              </CardButton>
              <a className={`${classes.button} ${classes.btnReport}`} href="mailto:sreeab28@gmail.com">
                <BugReportOutlinedIcon className={classes.icon} fontSize="large"/>
                <span style={{placeSelf: "center center"}}>
                  REPORT AN ISSUE
                </span>
              </a></>
              :<>
              <Card className={classes.card} size={(curEdit === "password")?"2x2":"1x2"} title={getTitle(curEdit)}>
                <CustomTextField
                  label={`New ${(curEdit === "phone")? "Phone Number": (curEdit === "email")? "Email": "Password"}`}
                  onChange={(event)=>{setNewInfo(event.target.value)}}
                  variant="outlined"
                  type={(curEdit === "password")?"password": "text"}
                  value={newInfo}
                />
                {(curEdit === "password") &&
                <CustomTextField
                  label={"Current Password"}
                  onChange={(event)=>{setCurPwd(event.target.value)}}
                  variant="outlined"
                  value={curPwd}
                  type="password"
                />}
                <div className={classes.cardFooter}>
                  <Fade in={loading} unmountOnExit>
                    <CircularProgress className={classes.progress}/>
                  </Fade>
                  <SaveButton onClick={handleSave}>
                    Save
                  </SaveButton>
                  <CancelButton onClick={handleCancel}>
                    Cancel
                  </CancelButton>
                </div>
              </Card></>}
            </div>
          </Fade>
        </div>
        <ProgressBar open={openProg} onClose={()=>{setOpenProg(false)}}/>
      </div>
    </Fade>
  );
}