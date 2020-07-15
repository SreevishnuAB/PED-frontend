import '../App.css';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuDialog from './dialog';
import MenuDialogTitle from './dialog-title';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';
import CustomButton from './custom-button';
import DialogActions from '@material-ui/core/DialogActions';
import CustomTextField from './custom-text-input';
import ToastNotification from './toast';
import ProgressBar from './progress-bar';
import Axios from '../axios/config';
import Fade from 'react-reveal/Fade';

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
  logoutBtn: {
    padding:'0.5px !important'
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
    backgroundColor: "rgba(0,26,41, 0.9)",
    overflowX: "hidden",
    transition: "0.5s"
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
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const [openPwd, setOpenPwd] = useState(false);
  const [pwdCur, setPwdCur] = useState('');
  const [pwdNew, setPwdNew] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const [openProg, setOpenProg] = useState(false);
  const [toastMessage, setToastMessage] = useState({error: false, messageText: ''});

  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu);
  }

  const handleLogout = ()=>{
    handleOpenMenu();
    props.onLogout();
  }

  const handleSave = ()=>{
    /*TODO* backend integration*/

    if(!pwdNew || !pwdCur){
      setToastMessage({error: true, messageText: 'Enter a valid password'});
      setOpenToast(true);
    }
    else{
      const payload = {
        id: props.username,
        cur_pwd: pwdCur,
        new_pwd: pwdNew
      };
      handleOpenPwd();
      setPwdCur('');
      setPwdNew('');
      setOpenProg(true);
      Axios.patch(
        `/${props.username}/password`,
        payload
      ).then((response)=>{
        setToastMessage({error: false, messageText: response.data});
        setOpenProg(false);
        setOpenToast(true);
      }).catch((error)=>{
        setToastMessage({error: false, messageText: error.response.data});
        setOpenProg(false);
        setOpenToast(true);
      });
    }
  }

  const handleOpenPwd = ()=>{
    setOpenPwd(!openPwd);
    setOpenMenu(false);
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

        </div>
        <ProgressBar open={openProg} onClose={()=>{setOpenProg(false)}}/>
      </div>
    </Fade>
  );
}